// section 7 lecture 9

// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, db) => {
    if (err) {
      return console.log("Unable to connect to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    // db.collection("Todos")
    //   .findOneAndUpdate(
    //     {
    //       _id: new ObjectID("5c489a4356d799be2f3eff4f")
    //     },
    //     {
    //       $set: {
    //         completed: true
    //       }
    //     },
    //     {
    //       returnOriginal: false
    //     }
    //   )
    //   .then(result => {
    //     console.log(result);
    //   });
    db.collection("Users")
      .findOneAndUpdate(
        {
          _id: new ObjectID("5c4854f95ae387414c2d6097")
        },
        {
          $set: {
            name: "Varun"
          },
          $inc: {
            age: 1
          }
        },
        {
          returnOriginal: false
        }
      )
      .then(result => {
        console.log(result);
      });
    // db.close();
  }
);
