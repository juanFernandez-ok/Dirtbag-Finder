"use strict";

const express = require("express");
const morgan = require("morgan");
const port = 8899;

const {
  getUsers,
  getUserById,
  getActivePosts,
  getActivePostsByCategory,
  getActivePostsById,
  getClosedPostsByUserId,
} = require("./GetHandlers");

const {newUser, newRequest, newPost} = require("./PostHandlers")
const {editProfile} = require("./PatchHandlers")
const {deletePost} = require("./DeleteHandlers")

express()
  // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
  .use(morgan("tiny"))
  .use(express.json())

  // Any requests for static files will go into the public folder
  .use(express.static("public"))

  // endpoints here 👇

  .get("/users", getUsers)
  .get("/user/:userId", getUserById)
  .get("/activePosts", getActivePosts)
  .get("/activePosts/:category", getActivePostsByCategory)
  .get("/post-details/:postId", getActivePostsById)
  .get("/closedPosts/:userId", getClosedPostsByUserId)

  .post("/newUser", newUser)
  .post("/request", newRequest)
  .post("/newPost", newPost)

  .patch("/edit-profile", editProfile)

  .delete("/delete-post", deletePost)


  .get("/test", (req, res) => {
    res.status(200).json({ data: "hello" });
  })

  // this is my catch all endpoint.
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  .listen(port, () => console.log(`Listening on port ${port}`));
