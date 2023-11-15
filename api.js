import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const { API_ID, API_KEY } = process.env;
const AUTH_ENDPOINT = 'https://example.com/auth'; // Replace with the actual authentication endpoint

app.get('/posts', async (req, res) => {
  try {
    // Step 1: Authenticate and obtain a token
    const authResponse = await axios.post(AUTH_ENDPOINT, {
      api_id: API_ID,
      api_key: API_KEY,
      // Add any other required authentication parameters
    });

    const accessToken = authResponse.data.access_token;

    // Step 2: Use the token to make authenticated requests
    const meliObject = new MeliObject(accessToken);
    const user = await meliObject.get('/users/me');
    const items = (await meliObject.get(`/users/${user.id}/items/search`)).results || [];

    if (items.length) {
      const result = [];
      const promises = items.map(item_id => meliObject.get(`/items/${item_id}`));

      for await (const item of promises) {
        result.push(item);
      }

      res.render('posts', { items: result });
    } else {
      res.status(404).send('no items were found :(');
    }
  } catch (err) {
    console.log('Something went wrong', err);
    res.status(500).send(`Error! ${err}`);
  }
});

// Assuming you have some way to start your express app, e.g., app.listen(...)
XF