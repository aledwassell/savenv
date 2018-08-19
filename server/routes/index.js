let express = require('express'),
    router = express.Router(),
    app = express(),
    mongoDB = require('mongodb'),
    ObjectId = require('mongodb').ObjectID;

let MongoClient = mongoDB.MongoClient;
const url = 'mongodb://localhost:27017/sandbox';

router.get('/', (req, res, next) => {
    res.render('index', {title: 'Express app'});
});

router.route('/data')
    .get((req, res, next) => {
        MongoClient.connect(url, (err, db) => {
            if (err) {
                console.log('There was an error on the server ', err)
            } else {
                let collection = db.collection('documents');
                collection.find({}).toArray((err, result) => {
                    if (err) {
                        res.send(err);
                    } else if (result.length) {
                        res.send(result)
                    } else {
                        res.send('No data found');
                    }
                    db.close();
                })
            }
        });
    })
    .post((req, res, next) => {
        MongoClient.connect(url, (err, db) => {
            if(err) {
                console.log('There was an error ', err)
            } else {
                console.log('Connected to the server for POST')
                let collection = db.collection('documents')
                collection.insertOne(req.body, (err, result) => {
                    if(err) {
                        console.log('There was an error ', err)
                    } else {
                        res.send(result.ops[0]);
                    }
                    db.close();
                })
            }
        })
    });
router.route('/data/:id')
    .delete((req, res, next) => {
        let id = req.params.id;
        MongoClient.connect(url, (err, db) => {
            if(err){
                console.log(`There was an error ${err}`)
            } else {
                let collection = db.collection('documents');
                collection.deleteOne({ "_id" : ObjectId(id) }, (err, result) => {
                    if(err) {
                        console.log('There was an error ', err)
                    } else {
                        res.send('success');
                    }
                    db.close();
                })
            }
        })
    })
module.exports = router;