const { ObjectID } = require("mongodb");
const { mongoose } = require("../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("../server/models/user");

// var id = "5c6a4d0110b9e44e2fc1699f";

// if (!ObjectID.isValid(id)) {
//   console.log("ID NOT VALID");
// }

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log("FIND TODOS", todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log("FIND ONE TODO", todo);
// });

// Todo.findById(id)
//   .then(id => {
//     if (!id) {
//       return console.log("ID NOT FOUND");
//     }
//     console.log("FIND BY ID", id);
//   })
//   .catch(err => {
//     console.log(err);
//   });

var id = "5c4994b60aaae0455090ab3611";
User.find({
  _id: id
})
  .then(users => {
    console.log("USERS", users);
  })
  .catch(e => {
    console.log(e);
  });

User.findOne({
  _id: id
}).then(user => {
  console.log("ONE USER", user);
});

User.findById(id)
  .then(byId => {
    if (!byId) {
      return console.log("Unable to find user");
    }
    console.log("BY ID", JSON.stringify(byId, undefined, 2));
  })
  .catch(e => {
    console.log(e);
  });
