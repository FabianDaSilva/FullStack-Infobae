const { postUser } = require('../controllers/Users.controller');

const Router = require('express').Router;
const userRoutes = Router();

userRoutes.post('/', postUser);

module.exports = userRoutes;