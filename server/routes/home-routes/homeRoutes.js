
// const ObjectID = require('mongodb').ObjectID;

const HomeInfoCollection = require('./HomeInfoCollection');

module.exports = (app, db) => {

    app.get('/api/homeInfo/', (req, res) => {

        db.collection('homeInfo').findOne({}, (err, item) => {

            if (err) {
                res.send({ 'error': 'AN error has occurred' });
            } else {
                res.send(item);
            }
        });
    });

    app.post('/api/homeInfo/article', (req, res) => {

        const article = HomeInfoCollection.createArticle(req.body.name, req.body.link, req.body.description, req.body.colors);

        db.collection('homeInfo').insert(article, (err, result) => {

            if (err) {
                res.send({ 'error': 'AN error has occurred' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });
};

// module.exports = (app, db) => {
//
//     app.get('/notes/:id', (req, res) => {
//
//         const id = req.params.id;
//         const details = { '_id': new ObjectID(id)};
//
//         db.collection('notes').findOne(details, (err, item) => {
//
//             if (err) {
//                 res.send({ 'error': 'AN error has occurred' });
//             } else {
//                 res.send(item);
//             }
//         })
//     });
//
//     app.post('/notes', (req, res) => {
//
//         const note = { text: req.body.body, title: req.body.title };
//         console.log(note);
//
//         db.collection('notes').insert(note, (err, result) => {
//
//             if (err) {
//                 res.send({ 'error': 'AN error has occurred' });
//             } else {
//                 res.send(result.ops[0]);
//             }
//         });
//     });
//
//     app.delete('/notes/:id', (req, res) => {
//
//         const id = req.params.id;
//         const details = { '_id': new ObjectID(id)};
//
//         db.collection('notes').remove(details, (err, item) => {
//
//             if (err) {
//                 res.send({ 'error': 'AN error has occurred' });
//             } else {
//                 res.send('Note ' + id + ' deleted!');
//             }
//         });
//     });
//
//     app.put('/notes/:id', (req, res) => {
//
//         const id = req.params.id;
//         const details = { '_id': new ObjectID(id)};
//         const note = { text: req.body.body, title: req.body.title };
//
//         db.collection('notes').update(details, note, (err, result) => {
//
//             if (err) {
//                 res.send({ 'error': 'AN error has occurred' });
//             } else {
//                 res.send(note);
//             }
//         });
//     });
// };
