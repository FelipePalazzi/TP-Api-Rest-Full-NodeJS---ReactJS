# 📘 Proyecto — API REST Full con NodeJS (Express) + ReactJS
**Proyecto academico para la materia Sistemas Distribuidos - UTN FRCU 2025**
Este proyecto implementa un sistema simple de gestión de usuarios utilizando:

> * **Backend:** NodeJS + Express
> * **Frontend:** ReactJS
> * **Comunicación:** API REST
> * **Almacenamiento:** En memoria (sin base de datos)

Permite realizar operaciones básicas:

> ✔️ Listar usuarios
> ✔️ Crear usuarios
> ✔️ Eliminar usuarios
> ✔️ Validación de email duplicado
> ✔️ Validación de datos requeridos

El frontend se comunica con el backend mediante llamadas HTTP usando `fetch`.

---

## 🚀 Estructura del Proyecto

```
TP-Api-Rest-Full-NodeJS---ReactJS/
├── client # Frontend
│   ├── index.html # Archivo HTML principal
│   └── src # Código fuente de React
│       ├── app.jsx # Componente principal de la aplicación
│       └── main.jsx # Punto de entrada de React
└── server # Backend
    ├── app.js # Archivo principal del servidor Express
    ├── models # Modelos de datos
    │   └── User.js # Modelo y validación de usuario
    ├── routes # Rutas de la API
    │   └── users.js # Rutas para usuarios
    └── services # Lógica de negocio
        └── userService.js # Servicios para usuarios
```

---

# 🖥️ Backend (server)

El backend es una API REST construida con Express.
Los usuarios se almacenan **en memoria**, por lo que se reinician cada vez que se levanta el servidor.

### ▶️ **Cómo ejecutar el backend**

```bash
cd server
npm install
npm run start
```

El backend se levanta por defecto en:

```
http://localhost:3000
```

---

# 🎨 Frontend (client)

El frontend está construido con ReactJS.
Permite visualizar los usuarios, agregarlos y eliminarlos, consumiendo la API del backend.

### ▶️ **Cómo ejecutar el frontend**

```bash
cd client
npm install
npm run dev
```

El frontend normalmente se ejecuta en:

```
http://localhost:5173
```

---

# 🔗 Comunicación entre frontend y backend

Asegurate de que ambos están corriendo localmente, de ser asi funcionarán sin problemas.

---

# 📦 Tecnologías utilizadas

### Backend

* NodeJS
* Express
* CORS
* Nodemon

### Frontend

* ReactJS
* Vite
* Fetch API

---

# 👥 Integrantes

- Santiago Allaud  
- Felipe Palazzi  
- Mauricio Nahuel Salto 

---