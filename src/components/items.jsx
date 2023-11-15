import axios from 'axios';

const ACCESS_TOKEN = import.meta.env.VITE_API_KEY; // Replace with your actual access token
const STATUS_ID = 'active'; // Replace with your actual status ID
const SITE_ID = import.meta.env.VITE_API_ID; // Replace with your actual site ID
const searchTerm = 'your_search_term'; // Replace with your actual search term

const url = `https://api.mercadolibre.com/products/search?status=${STATUS_ID}&site_id=${SITE_ID}&q=${searchTerm}`;

axios.get(url, {
  headers: {
    'Authorization': `Bearer ${ACCESS_TOKEN}`
  }
})
  .then(response => {
    // Handle the response
    console.log(response.data);
  })
  .catch(error => {
    // Handle errors
    console.error(error);
  });
