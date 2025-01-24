import axios from 'axios';

// Create a custom instance with specific configuration
export const request = axios.create({
  baseURL: 'https://6793364a5eae7e5c4d8dea21.mockapi.io/:endpoint',

  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
    'Content-Type': 'application/json',
  },
  
});





