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

    // deleteMany
    // db.collection("Users")
    //   .deleteMany({ name: "Harsha" })
    //   .then(result => {
    //     console.log(result);
    //   });
    // deleteOne
    // db.collection("Todos")
    //   .deleteOne({ text: "test123" })
    //   .then(result => {
    //     console.log(result);
    //   });

    // findOneAndDeletes
    db.collection("Users")
      .findOneAndDelete({ _id: new ObjectID("5c4850e5b89a443f733437fb") })
      .then(result => {
        console.log(JSON.stringify(result, undefined, 2));
      });

    // db.close();
  }
);
