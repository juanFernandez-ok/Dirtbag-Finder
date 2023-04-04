"use strict";
const { uuid } = require("uuidv4");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// POST NEW USER
const newUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("dirtBag");

    // this checks if the user is already in the data base
    const findUser = await db
      .collection("users")
      .findOne({ email: req.body.email });

    if (findUser) {
      return res
        .status(200)
        .json({ status: 200, message: "Existing user", data: findUser });
    }
    // if user is not in DB this will create a new user
    const newId = uuid();

    const newUser = {
      _id: newId,
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      profile: {
        indoor: false,
        outdoor: false,
        levelSport: false,
        levelTrad: false,
        bio: null,
        bannerUrl: "",
      },
      activePosts: [],
      oldPartners: [],
      pendingRequests: [],
    };
    const createNewUser = await db.collection("users").insertOne(newUser);

    newUser
      ? res
          .status(200)
          .json({ status: 200, message: "User created", data: newUser })
      : res
          .status(400)
          .json({ status: 400, message: "Nothing was found here" });
  } catch (error) {
    res.status(500).json({ status: 500, message: error });
    client.close();
  }
  client.close();
};

// POST NEW REQUEST
const newRequest = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("dirtBag");

    items
      ? res.status(200).json({ status: 200, data: items })
      : res
          .status(400)
          .json({ status: 400, message: "Nothing was found here" });
  } catch (error) {
    res.status(500).json({ status: 500, message: error });
    client.close();
  }
  client.close();
};

// POST NEW POST
const newPost = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("dirtBag");
    const newId = uuid();

    // this verifies there's not missing information in the req.body
    if (!req.body.text || !req.body.type) {
      return res.status(400).json({
        status: 400,
        data: "Missing information",
      });
    }

    // this verifies that the user doesn't already have an active post in the category
    const findPost = await db
      .collection("activePosts")
      .find({ author: req.body.author })
      .toArray();

    console.log(findPost);

    if (findPost.length > 0) {
      const existingPost = findPost.find((item) => {
        return item.type === req.body.type;
      });

      if (existingPost) {
        return res.status(400).json({
          status: 400,
          message: "Sorry, but you already have a post in this section. If you want to make a new post please delete your old post first",
        });
      }
    }
    console.log(req.body);

    const postResult = {
      _id: newId,
      author: req.body.author,
      authorBanner: req.body.authorBanner,
      type: req.body.type,
      text: req.body.text,
      levelSport: req.body.levelSport,
      levelTrad: req.body.levelTrad,
      requests: [],
    };

    const createNewPost = await db
      .collection("activePosts")
      .insertOne(postResult);

    createNewPost
      ? res
          .status(200)
          .json({ status: 200, message: "New post created", newPostId: newId })
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
  newUser,
  newRequest,
  newPost,
};
