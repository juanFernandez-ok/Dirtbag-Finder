"use strict";
const { uuid } = require("uuidv4");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// DELETE POST
const deletePost = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("dirtBag");
    const myId = String(req.params.postId);
    const currentUserId = String(req.body.userId);

    // this finds post to be deleted
    const findPost = await db.collection("activePosts").findOne({ _id: myId });

    const findUser = await db
      .collection("users")
      .findOne({ _id: currentUserId });

    // this updates currentUser document, updates "oldPartners" and removes post from "active"
    // oldPartners will get updated only with new people here i verify that
    if (findPost.requests.length > 0) {
      const oldPartnersArr = findUser.oldPartners;
      let newPartnersArr = [];
      findPost.requests.forEach((el) => {
        if (
          !oldPartnersArr.some((item) => {
            return item._id === el._id;
          })
        ) {
          newPartnersArr.push(el);
        }
      });
      if (newPartnersArr.length > 0) {
        newPartnersArr.forEach(async (el) => {
          await db
            .collection("users")
            .updateOne({ _id: currentUserId }, { $push: { oldPartners: el } });
        });
      }
    }

    const removeFromActive = await db
      .collection("users")
      .updateOne({ _id: currentUserId }, { $pull: { activePosts: myId } });

    // this insert post to the closedPosts collection
    const moveToClosed = await db
      .collection("closedPosts")
      .insertOne(findPost);

    // this delete the post from the activePosts collection
    const deletePost = await db
      .collection("activePosts")
      .deleteOne({ _id: myId });

    deletePost
      ? res.status(200).json({ status: 200, message: "Post deleted" })
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
  deletePost,
};
