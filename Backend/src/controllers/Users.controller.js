const userModel = require('../models/user.model');
const jwt = require("jsonwebtoken");


const postUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const newUser = {
            name, email, password
        }

        const result = await userModel.create(newUser);

        const token = jwt.sign(
            { id: result._id, email: result.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(201).json(payload = {
            message: 'Usuario creado exitosamente',
            data: result,
            token: token
        });

    } catch (error) {
        res.status(400).json(payload = {
            message: 'Error al crear el usuario',
            error: error
        });
        console.warn(error);
    }
}

module.exports = {
    postUser
}