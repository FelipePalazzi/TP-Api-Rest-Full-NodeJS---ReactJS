import React, { useEffect, useState } from 'react'
const API = 'http://localhost:3000'

const App = () => {
    //Definimos los estados del componente
    const [users, setUsers] = useState([])
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    //Utilizamos el useEffect para cargar los usuarios al montar el componente
    useEffect(() => {
        fetchUsers()
    }, [])

    //Funcion asincrónica para obtener los usuarios desde el backend
    async function fetchUsers() {
        try {
            const res = await fetch(`${API}/users`)
            const data = await res.json()
            setUsers(data)
        } catch (e) {
            setError('No se pudieron cargar usuarios')
        }
    }

    //Manejador de envío del formulario para crear un nuevo usuario
    async function handleSubmit(e) {
        e.preventDefault()
        setError('')
        if (!nombre.trim() || !email.trim()) return setError('Nombre y email son requeridos')


        try {
            const res = await fetch(`${API}/users`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nombre, email })
            })


            if (res.status === 201) {
                const newUser = await res.json()
                // actualizamos el state local (mapeado en memoria del navegador)
                setUsers(prev => [...prev, newUser])
                setNombre('')
                setEmail('')
            } else {
                const err = await res.json()
                setError(err.error || err.message || 'Error al crear usuario')
            }
        } catch (e) {
            setError('Error en la comunicación con el servidor')
        }
    }
    //Manejador para eliminar un usuario por el id
    async function handleDelete(id) {
        if (!confirm('¿Eliminar usuario?')) return
        try {
            const res = await fetch(`${API}/users/${id}`, { method: 'DELETE' })
            if (res.ok) {
                setUsers(prev => prev.filter(u => u.id !== id))
            } else {
                const err = await res.json()
                setError(err.error || err.message || 'Error al eliminar')
            }
        } catch (e) {
            setError('Error en la comunicación con el servidor')
        }
    }

    //Resultado de la interfaz que devuelve el componente App
    return (
        <div style={{ maxWidth: 900, margin: '24px auto', fontFamily: 'Arial, sans-serif', backgroundColor: '#fcfcfcff', padding: 20, borderRadius: 8 }}>
            <div style={{  margin: '0px', padding:0, backgroundColor: '#4a6bffff', borderRadius: 8}}>
                <h1 style={{ textAlign: 'center' }}><b>Users — API Rest Full (Node + React)</b></h1>
                <div style={{  backgroundColor: '#73a6e9ff', borderRadius: 8 }}>
                    <h2 style={{ textAlign: 'center' }}>Sistemas Distribuidos UTN FRCU 2025</h2>
                    <h3 style={{ textAlign: 'center' }}><b>Integrantes:</b> Felipe Palazzi - Nahuel Salto - Santiago Allaud</h3>
                </div>
            </div>

            <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
                <div style={{ display: 'flex', gap: 8 }}>
                    <input
                        placeholder="Nombre y Apellido"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                        style={{ flex: 1, padding: 8 }}
                    />
                    <input
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        style={{ flex: 1, padding: 8 }}
                    />
                    <button style={{ padding: '8px 12px' }}>Agregar</button>
                </div>
            </form>
            {error && <div style={{ color: 'crimson', marginBottom: 12 }}>{error}</div>}
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: 8 }}>ID</th>
                        <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: 8 }}>Nombre</th>
                        <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: 8 }}>Email</th>
                        <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: 8 }}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length === 0 && (
                        <tr>
                            <td colSpan={4} style={{ padding: 8 }}>No hay usuarios</td>
                        </tr>
                    )}
                    {users.map(u => (
                        <tr key={u.id}>
                            <td style={{ padding: 8, borderBottom: '1px solid #f0f0f0' }}>{u.id}</td>
                            <td style={{ padding: 8, borderBottom: '1px solid #f0f0f0' }}>{u.nombre}</td>
                            <td style={{ padding: 8, borderBottom: '1px solid #f0f0f0' }}>{u.email}</td>
                            <td style={{ padding: 8, borderBottom: '1px solid #f0f0f0' }}>
                                <button onClick={() => handleDelete(u.id)} style={{ padding: '6px 10px' }}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default App