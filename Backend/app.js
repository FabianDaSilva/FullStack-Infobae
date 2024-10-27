const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./src/config/connectDB');
const userRoutes = require('./src/routes/Users.routes');
const setupSwagger = require('./src/swagger');

require('dotenv').config()

app.use(cors())
app.use(express.json())
setupSwagger(app);

connectDB();

app.use('/api/users', userRoutes)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en: localhost:${PORT}`);
});