const express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    PORT = 4000,
    app = express(),
    routes = require('./routes/index');

app.use(cors());
app.use(bodyParser.json());

app.use('/', routes);
app.listen(PORT, () => console.log(`Express server running on port ${PORT}`));

