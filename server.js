const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
const PORT = 3000;

// Enable CORS for all requests
app.use(cors());

// Middleware to parse incoming JSON requests
app.use(express.json());

// Buat koneksi ke database MySQL
const db = mysql.createConnection({
  host: '127.0.0.1', // Sesuaikan dengan konfigurasi MySQL Anda
  user: 'root',
  password: '',
  database: 'soma_app'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err.message);
  } else {
    console.log('Connected to the MySQL database.');
  }
});

// Buat tabel jika belum ada
db.query(`
  CREATE TABLE IF NOT EXISTS songs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    artist VARCHAR(255) NOT NULL,
    url VARCHAR(255) NOT NULL
  )
`, (err, result) => {
  if (err) {
    console.error('Error creating table:', err.message);
  } else {
    console.log('Table "songs" created or already exists.');
  }
});

// Rute untuk halaman utama
app.get('/', (req, res) => {
  res.send('Welcome to the Soma App!');
});

// Rute untuk mengambil semua lagu dari database
app.get('/songs', (req, res) => {
  db.query('SELECT * FROM songs', (err, results) => {
    if (err) {
      res.status(500).send('Error retrieving songs from database');
    } else {
      res.json(results);
    }
  });
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
