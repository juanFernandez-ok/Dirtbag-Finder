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


  module.exports = {
    deletePost
      };