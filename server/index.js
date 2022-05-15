const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth.js');

const app = express();

const port = 5000;

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get(
    '/',(req,res) => {res.send('Hadi hayırlı olsuuuuuunnn 🥁✨🥁🔔🔔🥁🔔🥁✨💃✨💃💃✨✨💃')}
);

app.use('/auth',authRoutes);

app.listen(port,()=>console.log('server çalışiy BABBA sığıntı yOq '))
