// backend service. path is startup/service/index.js - run using node index.js

import cors from 'cors';
import express from 'express';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(cors({
    origin: ['http://localhost5173', 'https://homequest.click'],
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

const users = {};

// // DEV: seed a test user (email: test@example.com, password: password123)
// import bcrypt from 'bcryptjs';
// (async () => {
//   const pw = await bcrypt.hash('password123', 10);
//   users['test@example.com'] = { passwordHash: pw, favorites: [] };
// })();


// authentication endpoints

// user registration
app.post('/api/register', async (req, res) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
        return res.status(400).json({ msg: 'Email and password required' });
    }
    if (users[email]) {
        return res.status(409).json({ msg: 'User already exists' });
    }
    const passwordHash = await bcrypt.hash(password, 10);
    users[email] = { passwordHash };
    res.status(200).json({ msg: 'Registered successfully' });
});

// user login
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    const user = users[email];

    if (!user) {
        return res.status(404).json({ msg: 'User not found' });
    }

    // password verification
    const isValid = await bcrypt.compare(password, user.passwordHash);
    if (!isValid) {
        return res.status(401).json({ msg: 'Invalid password' });
    }

    // token generation and set cookie
    const token = uuidv4();
    user.token = token;
    res.cookie('token', token, { httpOnly: true });
    res.json({ msg: 'Login successful' });
});

// user logout
app.post('/api/logout', (req, res) => {
    const token = req.cookies.token;
    for (const email in users) {
        if (users[email].token === token) {
            delete users[email].token;
        }
    }
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

// endpoint: user favorites (login required)
for (const email in users) {
    if (!users[email].favorites) users[email].favorites = [];
  }
  
  // get favorites (must be logged in)
  app.get('/api/favorites', (req, res) => {
    const token = req.cookies.token;
    const userEntry = Object.entries(users).find(([email, u]) => u.token === token);
    if (!userEntry) return res.status(401).json({ msg: 'Unauthorized' });
  
    const [email, user] = userEntry;
    res.json(user.favorites || []);
  });
  
  // add/remove favorite
  app.post('/api/favorites', (req, res) => {
    const token = req.cookies.token;
    const userEntry = Object.entries(users).find(([email, u]) => u.token === token);
    if (!userEntry) return res.status(401).json({ msg: 'Unauthorized' });
  
    const [email, user] = userEntry;
    const home = req.body;
  
    if (!home || !home.id) {
      return res.status(400).json({ msg: 'Invalid home data' });
    }
  
    const exists = user.favorites?.find(h => h.id === home.id);
    if (exists) {
      user.favorites = user.favorites.filter(h => h.id !== home.id);
    } else {
      user.favorites = [...(user.favorites || []), home];
    }
  
    res.json(user.favorites);
  });

  // login status check endpoint
  app.get('/api/status', (req, res) => {
    const token = req.cookies.token;
    const userEntry = Object.entries(users).find(([_, u]) => u.token === token);
    if (!userEntry) return res.json({ loggedIn: false });
    const [email] = userEntry;
    res.json({ loggedIn: true, email });
  });
  
  
  app.use(express.static('public'));
  
// start server
app.listen(port, () => {
    console.log(`HomeQuest service running on port ${port}`);
});
