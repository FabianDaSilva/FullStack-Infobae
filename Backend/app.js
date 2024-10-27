const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./src/config/connectDB');
require('dotenv').config()

app.use(cors())
app.use(express.json())

connectDB();


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en: localhost:${PORT}`);
});