// index.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const router = require('./routes');

dotenv.config();

const webAppUrl = process.env.CLIENT_URL;
const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL
}));

app.use(express.json());
app.use('/api', router);

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});
