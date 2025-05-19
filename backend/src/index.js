const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/api/datos', async (req, res) => {
  try {
    const response = await axios.get('https://randomuser.me/api/?results=10');
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener datos' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});