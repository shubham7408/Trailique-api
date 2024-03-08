const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const users = [];

app.use(bodyParser.json());

// POST request to create new accounts
app.post('/create_account', (req, res) => {
  const requestData = req.body;

  // Check if the request body is an array
  if (!Array.isArray(requestData)) {
    return res.status(400).json({ error: 'Invalid request format. Expecting an array of users.' });
  }

  // Iterate through each user in the array
  for (const data of requestData) {
    if (!data.username || !data.email || !data.password) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    for (const user of users) {
      if (user.username === data.username) {
        return res.status(409).json({ error: 'Username already taken' });
      }
      if (user.email === data.email) {
        return res.status(409).json({ error: 'Email already registered' });
      }
    }

    const newUser = {
      username: data.username,
      email: data.email,
      password: data.password,
    };
    users.push(newUser);
  }

  return res.status(201).json({ message: 'Accounts created successfully' });
});

// GET request to fetch all users
app.get('/users', (req, res) => {
  return res.status(200).json(users);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});