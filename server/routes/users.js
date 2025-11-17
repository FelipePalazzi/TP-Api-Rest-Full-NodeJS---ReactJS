const express = require('express');
const router = express.Router();
const userService = require('../services/userService');


// GET /users - obtain all
router.get('/', (req, res) => {
const all = userService.getAll();
res.json(all);
});


// GET /users/:id - obtain by id
router.get('/:id', (req, res) => {
const id = Number(req.params.id);
const user = userService.getById(id);
if (!user) return res.status(404).json({ error: 'User not found' });
res.json(user);
});


// POST /users - create new user with 'nombre' and 'email'
router.post('/', (req, res, next) => {
try {
// Extract 'nombre' and 'email' from body
const { nombre, email } = req.body;
const created = userService.create({ nombre, email });
res.status(201).json(created);
} catch (err) {
next(err);
}
});


// DELETE /users/:id - eliminar
router.delete('/:id', (req, res, next) => {
try {
const id = Number(req.params.id);
const removed = userService.remove(id);
res.json({ success: true, removed });
} catch (err) {
next(err);
}
});


module.exports = router;