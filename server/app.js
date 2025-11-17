const express = require('express');
const cors = require('cors');
const usersRouter = require('./routes/users');

// Create Express app
const app = express();
app.use(cors());
app.use(express.json());

// Root endpoint
app.get(`/`, (req, res) => {
  res.json({ 
    message: `Backend de users`, 
    integrantes: `Felipe Palazzi, Nahuel Salto, Santiago Allaud` })
})

// Routes from usersRouter
app.use('/users', usersRouter);

// Centralized error handling
app.use((err, req, res, next) => {
console.error(err);
const status = err.status || 500;
res.status(status).json({ error: err.message || 'Internal Server Error' });
});

// Start server in port 3000
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));