const express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    PORT = 4000,
    app = express(),
    router = express.Router();

app.use(cors());
app.use(bodyParser());

mongoose.connect('mongodb://[server]/issues');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established!')
});

app.use('/', router);
app.listen(PORT, () => console.log(`Express server running on port ${PORT}`));