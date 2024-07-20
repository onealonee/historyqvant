const express = require('express');
const app = express();
const port = 5001;
const { Pool } = require('pg');


const pool = new Pool({
    user: 'volck',
    host: '92.255.78.34',
    database: 'hist_cvant',
    password: 'volck',
    port: 5432,
});

app.use(express.json());

app.get('/figures', async (req, res) => {
    try {
        const result = await pool.query('SELECT id, name, description FROM figures');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Маршрут для главной страницы
app.get('/', (req, res) => {
    res.send('Hello, World!');
});


// Запуск сервера
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


