// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('No se puede conectar al servidor MongoDB.');
  }
  console.log('Conectado al servidor de MongoDB.');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('58dc52b4653a22d939f0a147')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('58d9ae2ef4929b1be08784d4')
  }, {
    $set: {
      name: 'Jahudiel'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
