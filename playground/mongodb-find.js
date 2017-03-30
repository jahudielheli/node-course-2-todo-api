// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('No se puede conectar al servidor MongoDB.');
  }
  console.log('Conectado al servidor de MongoDB.');

  // db.collection('Todos').find({
  //   _id: new ObjectID('58daf9c8dd7c5ecbf7eefc65')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('No se pudo obtener todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('No se pudo obtener todos', err);
  // });

  db.collection('Users').find({
    name: 'Jahudiel'
  }).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('No se pudo obtener todos', err);
  });

  // db.close();
});
