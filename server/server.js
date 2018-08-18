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

let insertDocs = (db, callback) => {
    let collection = db.collection('documents');
    collection.insertMany([
            {a:1}, {a:2}, {a:3},
        ],
        (err, res) => {
            assert.equal(err, null);
            assert.equal(3, res.result.n);
            assert.equal(3, res.ops.length);
            console.log('Added 3 items to the collection');
            callback(res);
        })
}

let findDocs  = (db, callback) => {
    "use strict";
    let collection = db.collection('documents');
    collection.find({}).toArray((err, docs) => {
        assert.equal(err, null);
        console.log("Found the following records inside this collection");
        console.log(docs);
        callback(docs);
    });
}

MongoClient.connect(url, (err, db) => {
    assert.equal(null, err);
    console.log('Connected to server successfully');
    insertDocs(db, () => {
        findDocs(db, () => {
            db.close();
        })
    });
})

app.use('/', router);
app.listen(PORT, () => console.log(`Express server running on port ${PORT}`));

