// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

// Destructuring example
// var user = { name: "varuna", age: 25 };
// var { name } = user;
// console.log(name);

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, db) => {
    if (err) {
      return console.log("Unable to connect to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    // db.collection("Todos").insertOne(
    //   {
    //     text: "SOmething to do varun",
    //     completed: false
    //   },
    //   (err, result) => {
    //     if (err) {
    //       return console.log("Unable to insert Todo", err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //   }
    // );

    // db.collection("Users").insertOne(
    //   {
    //     name: "Harsha",
    //     age: "25",
    //     location: "Mysore"
    //   },
    //   (err, res) => {
    //     if (err) {
    //       console.log("Unable to insert Users", err);
    //     }
    //     console.log(res.ops[0]._id.getTimestamp());
    //   }
    // );

    db.close();
  }
);
