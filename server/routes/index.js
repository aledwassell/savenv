let express = require('express'),
    router = express.Router(),
    app = express(),
    mongoDB = require('mongodb');

router.get('/', (req, res, next) => {
    res.render('index', {title: 'Express app'});
});

router.route('/data')
    .get((req, res, next) => {
        let MongoClient = mongoDB.MongoClient;
        const url = 'mongodb://localhost:27017/sandbox';
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
        console.log(req.body)
        let MongoClient = mongoDB.MongoClient;
        const url = 'mongodb://localhost:27017/sandbox';
    })
module.exports = router;