const { postUser } = require('../controllers/Users.controller');

const Router = require('express').Router;
const userRoutes = Router();
/**
 * @swagger
 * /usuarios:
 *   post:
 *     summary: Crea un nuevo usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre del usuario
 *               email:
 *                 type: string
 *                 description: Email del usuario
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID del usuario
 *                 name:
 *                   type: string
 *                   description: Nombre del usuario
 *                 email:
 *                   type: string
 *                   description: Email del usuario
 *                 token:
 *                   type: string
 *                   description: Token de autenticación
 *       400:
 *         description: Error en la solicitud
 */
userRoutes.post('/', postUser);

module.exports = userRoutes;