// Simple validator helper
// Function to validate user payload with 'nombre' and 'email' fields completeness and email format
function validateUserPayload({ nombre, email }) {
if (!nombre || !email) return { valid: false, message: 'Nombre y email son requeridos' };
const emailRe = /^\S+@\S+\.\S+$/;
if (!emailRe.test(email)) return { valid: false, message: 'Email inválido' };
return { valid: true };
}

// Export the validator
module.exports = { validateUserPayload };