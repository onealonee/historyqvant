const express = require('express');
const app = express();
const multer = require('multer');

const cors = require('cors');
const path = require('path');
const port = 5001;
const { Pool } = require('pg');
const fs = require('fs');


const pool = new Pool({
    user: 'volck',
    host: '92.255.78.34',
    database: 'hist_cvant',
    password: 'volck',
    port: 5432,
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Папка, куда будут сохраняться загруженные файлы
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const filename = `${Date.now()}${ext}`;
        cb(null, filename);
    },
});
const upload = multer({ storage });

app.use(express.json());

app.use(cors());


app.get('/figures', async (req, res) => {
    try {
        const result = await pool.query('SELECT id, name, description, image_path FROM figures');
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

app.get('/figures/:id/image', async (req, res) => {
    const { id } = req.params;

    try {
        const result = await pool.query('SELECT image_path FROM figures WHERE id = $1', [id]);
        const imagePath = result.rows[0]?.image_path;

        if (imagePath && fs.existsSync(`.${imagePath}`)) {
            res.sendFile(path.resolve(`.${imagePath}`));
        } else {
            res.status(404).json({ error: 'Image not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Маршрут для загрузки модели и текстур
app.post('/upload', upload.fields([{ name: 'model', maxCount: 1 }, { name: 'textures', maxCount: 10 }]), async (req, res) => {
    try {
        const { id } = req.body;
        const modelPath = req.files['model'][0].path;
        const textures = req.files['textures'].map(file => file.path);

        const figureResult = await pool.query(
            'INSERT INTO figures (name, description, filePath) VALUES ($1, $2, $3) RETURNING *',
            [name, description, modelPath]
        );

        const figureId = figureResult.rows[0].id;

        for (const texturePath of textures) {
            await pool.query(
                'INSERT INTO textures (figure_id, filePath) VALUES ($1, $2)',
                [figureId, texturePath]
            );
        }

        res.status(201).json(figureResult.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
