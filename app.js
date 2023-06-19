const express = require('express');
const app = express();

const tasks = require('./routes/tasks');

const connectDB = require('./db/connect');
const { connect } = require('mongoose');
require('dotenv').config()

//middleware
app.use(express.json());


//routes
app.get('/hello', (res, req) => {
    res.send('Hello backend')
})

app.use('/api/v1/tasks', tasks);

const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening on ${port}...`));
    } catch (error) {
        console.log(error);
    }
};

start();

