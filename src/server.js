const express = require('express');
const mongoose = require('./config/db'); // Імпорт підключення до бази
const User = require('./models/User'); // Імпорт моделі користувача
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware для парсингу JSON
app.use(bodyParser.json());

// Роут для авторизації
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username, password });
        if (user) {
            res.status(200).json({ message: 'Успішний вхід', user });
        } else {
            res.status(401).json({ message: 'Невірний логін або пароль' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Помилка сервера', error });
    }
});

// Роут для реєстрації
app.post('/api/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Користувач із таким логіном уже існує.' });
        }

        const newUser = new User({ username, password });
        await newUser.save();
        res.status(201).json({ message: 'Реєстрація успішна' });
    } catch (error) {
        res.status(500).json({ message: 'Помилка сервера', error });
    }
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер працює на порту ${PORT}`);
});
