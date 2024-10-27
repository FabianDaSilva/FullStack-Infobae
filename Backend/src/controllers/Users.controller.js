const userModel = require('../models/user.model');

const postUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const newUser = {
            name, email, password
        }

        const result = await userModel.create(newUser);

        res.status(201).json(payload = {
            message: 'Usuario creado exitosamente',
            data: result
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