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
//выгрузка для страницы
app.get('/figures', async (req, res) => {
    try {
        const result = await pool.query('SELECT id, name, description, image FROM figures');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// загрузка картинок
app.post('/figures/:id/image', async (req, res) => {
    const { id } = req.params;
    const { image } = req.body; // Предполагаем, что изображение приходит в формате Base64

    if (!image) {
        return res.status(400).json({ error: 'Нихуя' });
    }

    try {
        // Обновите запись в базе данных с новым изображением
        await pool.query('UPDATE figures SET image = $1 WHERE id = $2', [image, id]);
        res.status(200).json({ message: 'Успешно' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});





// Запуск сервера
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


