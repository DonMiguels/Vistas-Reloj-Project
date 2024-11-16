const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(express.json());
app.use(cors());  // Habilitar CORS

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'vistas_reloj',
  password: 'Miguel02',
  port: 5432,
});

const SECRET_KEY = 'your_secret_key';

// Ruta para registrar un nuevo usuario
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    // Guardamos la contraseña directamente en texto plano (sin cifrar)
    const result = await pool.query(
      'INSERT INTO usuarios (username, password) VALUES ($1, $2) RETURNING id, username',
      [username, password]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    res.status(400).json({ error: 'Username already exists' });
  }
});

// Ruta para autenticar usuario (login)
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  
  console.log('Recibiendo datos de login:', { username, password });  // Log de la solicitud recibida

  try {
    // Realiza la consulta a la base de datos para obtener el usuario
    const result = await pool.query('SELECT * FROM usuarios WHERE username = $1', [username]);
    
    if (result.rows.length > 0) {
      const user = result.rows[0];
      console.log('Usuario encontrado:', user.username);  // Log de usuario encontrado en la base de datos

      // Compara la contraseña ingresada con la almacenada (sin usar bcrypt)
      if (password === user.password) {
        console.log('Contraseña válida, generando token');  // Log de éxito en la autenticación

        // Si las credenciales son correctas, genera un token JWT
        const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY);
        return res.json({ token });
      } else {
        console.log('Contraseña incorrecta');  // Log si la contraseña no coincide
        return res.status(400).json({ error: 'Invalid credentials' });
      }
    } else {
      console.log('Usuario no encontrado');  // Log si no se encuentra el usuario en la base de datos
      return res.status(400).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error en la autenticación:', error);  // Log de cualquier error en la consulta
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Iniciar servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
