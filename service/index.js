import express from 'express';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

const port = process.argv.length > 2 ? process.argv[2] : 4000;
app.use(express.static('public'));

app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`HomeQuest service running on port ${port}`);
});
