const express = require('express');
const app = express();
const port = 3000;

// Маршрут для главной страницы
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
