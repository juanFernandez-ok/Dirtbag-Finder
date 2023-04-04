"use strict";
const { uuid } = require("uuidv4");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// GET USERS
const getUsers = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("dirtBag");

    const users = await db.collection("users").find().toArray();
    users
      ? res.status(200).json({ status: 200, data: users })
      : res
          .status(400)
          .json({ status: 400, message: "Nothing was found here" });
  } catch (error) {
    res.status(500).json({ status: 500, message: error });
    client.close();
  }
  client.close();
};

// GET USER BY ID
const getUserById = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("dirtBag");
    const myId = String(req.params.userId);

    const user = await db.collection("users").findOne({ _id: myId });

    user
      ? res.status(200).json({ status: 200, data: user })
      : res
          .status(400)
          .json({ status: 400, message: "Nothing was found here" });
  } catch (error) {
    res.status(500).json({ status: 500, message: error });
    client.close();
  }
  client.close();
};

// GET ALL ACTIVE POSTS
const getActivePosts = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("dirtBag");

    const allPosts = await db.collection("activePosts").find().toArray();
    allPosts
      ? res.status(200).json({ status: 200, data: allPosts })
      : res
          .status(400)
          .json({ status: 400, message: "Nothing was found here" });
  } catch (error) {
    res.status(500).json({ status: 500, message: error });
    client.close();
  }
  client.close();
};

// GET ACTIVE POSTS BY CATEGORY
const getActivePostsByCategory = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("dirtBag");
    const myCategory = req.params.category;

    const allPosts = await db.collection("activePosts").find().toArray();

    const filteredPosts = allPosts.filter((item) => {
      return item.type.toLowerCase() === myCategory.toLowerCase();
    });

    filteredPosts
      ? res.status(200).json({ status: 200, data: filteredPosts })
      : res
          .status(400)
          .json({ status: 400, message: "Nothing was found here" });
  } catch (error) {
    res.status(500).json({ status: 500, message: error });
    client.close();
  }
  client.close();
};

// GET ACTIVE POSTS BY ID
const getActivePostsById = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("dirtBag");
    const postId = String(req.params.postId);

    const singlePost = await db
      .collection("activePosts")
      .findOne({ _id: postId });

      console.log(singlePost);

    const singleUser = await db
      .collection("users")
      .findOne({ email: singlePost.author });

    singlePost
      ? res.status(200).json({ status: 200, userId: singleUser._id, data: singlePost })
      : res
          .status(400)
          .json({ status: 400, message: "Nothing was found here" });
  } catch (error) {
    res.status(500).json({ status: 500, message: error });
    client.close();
  }
  client.close();
};

// GET CLOSED POSTS BY USER ID
const getClosedPostsByUserId = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("dirtBag");

    const allPosts = await db.collection("closedPosts").find().toArray();

    result
      ? res.status(200).json({ status: 200, data: result })
      : res
          .status(400)
          .json({ status: 400, message: "Nothing was found here" });
  } catch (error) {
    res.status(500).json({ status: 500, message: error });
    client.close();
  }
  client.close();
};

module.exports = {
  getUsers,
  getUserById,
  getActivePosts,
  getActivePostsByCategory,
  getActivePostsById,
  getClosedPostsByUserId,
};
