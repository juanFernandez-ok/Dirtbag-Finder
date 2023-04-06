
const { MongoClient } = require("mongodb");
const users = require("./data/users");
const activePosts = require("./data/activePosts");
const closedPosts = require("./data/closedPosts");
const montrealGyms = require("./data/montrealGyms")

require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

console.log(users);
const batchImport = async () => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("dirtBag");

  await db.collection("users").insertMany(users);
  await db.collection("activePosts").insertMany(activePosts);
  await db.collection("closedPosts").insertMany(closedPosts);
  await db.collection("montrealGyms").insertMany(montrealGyms);

  client.close();
};

batchImport();
