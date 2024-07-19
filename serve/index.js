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

sequelize
https://chatgpt.com/share/31ebd670-da82-4be6-b54b-2b73292e2f7d