"use strict";
const { uuid } = require("uuidv4");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// PATCH EDIT PROFILE
const editProfile = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("dirtBag");

    // update user info

    console.log(req.body);

    

    const query = { _id: req.body._id };
    const update = {
      $set: {
        "profile.indoor": req.body.indoor === null ,
        "profile.outdoor": req.body.outdoor,
        "profile.bio": req.body.bio,
        "profile.levelSport": req.body.levelSport,
        "profile.levelTrad": req.body.levelTrad,
      },
    };


    const userUpdated = await db.collection("users").updateOne(query, update);

    // find updated user to send to FE
    const updatedUser = await db
    .collection("users")
    .findOne({ _id: req.body._id });


    userUpdated
      ? res
          .status(200)
          .json({
            status: 200,
            message: "User profile updated",
            data: updatedUser,
          })
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
  editProfile,
};
