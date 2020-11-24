const express = require('express');

const app = express();

app.use(express.json());

const greetings = [
    'Hello',
    'Hola',
    'Chav'
];

function getRandomIntBetween(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.get('/', (req, res) => {
    res.send('Welcome to get-content, v1.0.');
});

app.get('/getGreeting', (req, res) => {
    res.send(greetings[getRandomIntBetween(0, greetings.length-1)]);
});

const port = process.env.PORT || 3001;
app.listen(port, () => { console.log(`get-content: Listening on port ${port}...`)});