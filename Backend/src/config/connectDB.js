const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log('Conección a la base de datos exitosa')
    } catch (error) {
        console.warn(error);
    }
}

module.exports = connectDB;