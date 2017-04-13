const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

// Todo.findOneAndRemove({_id: '58eec202d96c0ad62e08ddb2'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('58eec202d96c0ad62e08ddb2').then((todo) => {
  console.log(todo);
});
