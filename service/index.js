// server logic

// backend service. path is startup/service/index.js - run using node index.js

import cors from 'cors';
import express from 'express';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

import { connectToDatabase } from './db.js';

import WebSocket, { WebSocketServer } from 'ws';
import http from 'http';   // <-- added



const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(cors({
    origin: ['http://localhost:5173', 'https://homequest.click', 'https://homequest.click'],
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// authentication endpoints

// user registration
app.post('/api/register', async (req, res) => {
  const db = await connectToDatabase();
  const users = db.collection("users");

  const { email, password } = req.body;

  if (!email || !password) {
      return res.status(400).json({ msg: 'Email and password required' });
  }

  const existing = await users.findOne({ email });
  if (existing) {
      return res.status(409).json({ msg: 'User already exists' });
  }

  const passwordHash = await bcrypt.hash(password, 10);

  await users.insertOne({
      email,
      passwordHash,
      token: null,
      favorites: []
  });

  res.status(200).json({ msg: 'Registered successfully' });
});


// user login
app.post('/api/login', async (req, res) => {
  const db = await connectToDatabase();
  const users = db.collection("users");

  const { email, password } = req.body;

  const user = await users.findOne({ email });
  if (!user) {
      return res.status(404).json({ msg: 'User not found' });
  }

  const isValid = await bcrypt.compare(password, user.passwordHash);
  if (!isValid) {
      return res.status(401).json({ msg: 'Invalid password' });
  }

  const token = uuidv4();

  await users.updateOne({ email }, { $set: { token } });

  res.cookie('token', token, { httpOnly: true, secure: true, sameSite: "none" });
  res.json({ msg: 'Login successful' });
});

// user logout
app.post('/api/logout', async (req, res) => {
  const db = await connectToDatabase();
  const users = db.collection("users");

  const token = req.cookies.token;

  await users.updateOne(
      { token },
      { $set: { token: null } }
  );

  res.clearCookie('token');
  res.json({ msg: 'Logged out' });
});


// endpoint: property listings
app.get('/api/listings', (req, res) => {
    const listings = [
        { id: 1, title: 'Cozy Cottage', price: 150000 },
        { id: 2, title: 'Modern Apartment', price: 250000 },
        { id: 3, title: 'Beachfront Villa', price: 900000 },
    ];
    res.json(listings);
});
 
// get favorites
app.get('/api/favorites', async (req, res) => {
    const db = await connectToDatabase();
    const users = db.collection("users");

    const token = req.cookies.token;

    const user = await users.findOne({ token });
    if (!user) return res.status(401).json({ msg: 'Unauthorized' });

    res.json(user.favorites || []);
});

  
// add/remove favorite
app.post('/api/favorites', async (req, res) => {
    const db = await connectToDatabase();
    const users = db.collection("users");

    const token = req.cookies.token;
    const home = req.body;

    if (!home || !home.id) {
        return res.status(400).json({ msg: 'Invalid home data' });
    }

    const user = await users.findOne({ token });
    if (!user) return res.status(401).json({ msg: 'Unauthorized' });

    const exists = user.favorites?.find(h => h.id === home.id);

    if (exists) {
        // remove
        await users.updateOne(
            { token },
            { $pull: { favorites: { id: home.id } } }
        );
    } else {
        // add
        await users.updateOne(
            { token },
            { $push: { favorites: home } }
        );
    }

    const updatedUser = await users.findOne({ token });
    res.json(updatedUser.favorites);
});


// login status check endpoint
app.get('/api/status', async (req, res) => {
    const db = await connectToDatabase();
    const users = db.collection("users");

    const token = req.cookies.token;

    const user = await users.findOne({ token });
    if (!user) return res.json({ loggedIn: false });

    res.json({ loggedIn: true, email: user.email });
});



// ---------------------------------------------------------------------------
// 🚀 WEBSOCKET SERVER INSERTED HERE — minimal changes, required only
// ---------------------------------------------------------------------------

// Create HTTP server instead of app.listen()
const server = http.createServer(app);

// Create WebSocket server
const wss = new WebSocketServer({ noServer: true });

// Handle upgrade request for `/ws`
server.on('upgrade', (request, socket, head) => {
  if (request.url === '/ws') {
    wss.handleUpgrade(request, socket, head, ws => {
      wss.emit('connection', ws, request);
    });
  } else {
    socket.destroy();
  }
});

// WebSocket broadcast logic
wss.on('connection', ws => {
  console.log("WebSocket client connected");

  ws.on('message', msg => {
    console.log("Received:", msg.toString());

    // broadcast to all connected clients
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(msg.toString());
      }
    });
  });

  ws.on('close', () => console.log("WebSocket client disconnected"));
});

// Start HTTP + WebSocket server
server.listen(port, () => {
  console.log(`HomeQuest service + WebSocket running on port ${port}`);
});
