// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('No se puede conectar al servidor MongoDB.');
  }
  console.log('Conectado al servidor de MongoDB.');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('No se pudo insertar todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // insert new doc into users (name, age, location)
  // db.collection('Users').insertOne({
  //   name: 'Jahudiel',
  //   age: 28,
  //   location: 'Hermosillo'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('No se pudo insertar users', err);
  //   }
  //
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});
