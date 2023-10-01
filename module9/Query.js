// Create a new collection
db.createCollection("myCollection");

// Remove the "myCollection" collection
db.myCollection.drop();

// Insert 
db.myCollection.insertOne({
    key1: "value1",
    key2: "value2",
});

// Delete 
db.myCollection.deleteOne({
    key1: "value1",
});