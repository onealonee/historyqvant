const express = require('express');
const app = express();
const multer = require('multer');
const cors = require('cors');
const port = 5001;
const { Pool } = require('pg');

const pool = new Pool({
    user: 'volck',
    host: '92.255.78.34',
    database: 'hist_cvant',
    password: 'volck',
    port: 5432,
});

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.use(express.json());
app.use(cors()); // Разрешить CORS для всех запросов

// выгрузка для страницы
app.get('/figures', async (req, res) => {
    try {
        const result = await pool.query('SELECT id, name, description FROM figures');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// загрузка картинок
app.post('/figures/:id/image', upload.single('image'), async (req, res) => {
    const { id } = req.params;
    const image = req.file;

    if (!image) {
        return res.status(400).json({ error: 'No image file provided' });
    }

    try {
        const imagePath = `/uploads/${image.filename}`;

        // Обновление записи в базе данных с новым путем к изображению
        await pool.query('UPDATE figures SET image_path = $1 WHERE id = $2', [imagePath, id]);
        res.status(200).json({ message: 'Image updated successfully', path: imagePath });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
