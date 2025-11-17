// Services of users keeping data in memory
// We create a simple array to store users
let users = [
{ id: 1, nombre: 'Felipe Palazzi', email: 'felipepalazzi500@gmail.com' },
{ id: 2, nombre: 'Nahuel Salto', email: 'mnahuels01@gmail.com' },
{ id: 3, nombre: 'Santiago Allaud', email: 'allaudsantiago@gmail.com'}
];
let nextId = 4;

// Import the validator
const { validateUserPayload } = require('../models/User');

//Obtain all users from the array 'users'
function getAll() {
return users;
}

//Obtain user by id in the array 'users'
function getById(id) {
return users.find(u => u.id === id) || null;
}

//Create new user and push into the array 'users'
function create({ nombre, email }) {
// Before creating, validate the payload
const validation = validateUserPayload({ nombre, email });
if (!validation.valid) {
const err = new Error(validation.message);
err.status = 400;
throw err;
}

// In case of email uniqueness, check if email already exists
const exists = users.some(u => u.email.toLowerCase() === email.toLowerCase());
if (exists) {
const err = new Error('Email already registered');
err.status = 409;
throw err;
}

//Push new user into array 'users'
const newUser = { id: nextId++, nombre, email };
users.push(newUser);
return newUser;
}

//Remove user by id in the array 'users'
function remove(id) {
const idx = users.findIndex(u => u.id === id);
if (idx === -1) {
const err = new Error('User not found');
err.status = 404;
throw err;
}
const [removed] = users.splice(idx, 1);
return removed;
}


module.exports = { getAll, getById, create, remove };