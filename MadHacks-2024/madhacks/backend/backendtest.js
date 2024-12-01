const express = require('express');
const bodyParser = require('body-parser');
const Profile = require('./profile');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const allUsers = new Map();

// Login Endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (allUsers.has(username) && allUsers.get(username).getPassword() === password) {
        res.json({ success: true, message: "Logged in successfully" });
    } else {
        res.json({ success: false, message: "Invalid username or password" });
    }
});

// Signup Endpoint
app.post('/signup', (req, res) => {
    const { username, password, name } = req.body;
    if (allUsers.has(username)) {
        res.json({ success: false, message: "Username already taken" });
    } else {
        const profile = new Profile(username, password, name);
        allUsers.set(username, profile);
        res.json({ success: true, message: "Account created successfully" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
