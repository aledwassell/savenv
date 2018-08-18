const express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    MongoClient = require('mongodb'),
    assert = require('assert'),
    PORT = 4000,
    app = express(),
    router = express.Router();

let Dat = require('./models/dat');

app.use(cors());
app.use(bodyParser.json());

const url = 'mongodb://localhost:27017/';


router.route('/api/times').get((req, res) => {
    res.send('this is the get route');
});
router.route('/api').post((req, res) => {
    let dat = new Dat(req.body);
    console.log(dat);
    dat.save()
        .then(d => {
            console.log(d);
            res.status(200).json({'d': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

MongoClient.connect(url, (err, db) => {
    assert.equal(null, err);
    console.log('Connected to server successfully');
    db.close();
})

app.use('/', router);
app.listen(PORT, () => console.log(`Express server running on port ${PORT}`));

