// /api/google-map.js
import axios from 'axios';

export default async function handler(req, res) {
  const { input } = req.query;

  if (!input) {
    return res.status(400).json({ error: 'Missing input parameter' });
  }

  const GOOGLE_API_KEY = 'YOUR_API_KEY';

  try {
    const response = await axios.get(
      'https://maps.googleapis.com/maps/api/place/autocomplete/json',
      {
        params: {
          input,
          key: GOOGLE_API_KEY,
          types: 'address'
        }
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Google API error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
