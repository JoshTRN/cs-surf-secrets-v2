const functions = require("firebase-functions");

const app = require("express")();

const FBAuth = require("./utility/fbAuth");

const { getAllPosts, postSinglePost } = require("./handlers/posts");
const {
  signup,
  login,
  uploadImage,
  addUserDetails,
  getAuthenticatedUser,
} = require("./handlers/users");

// Users Routes
app.post("/signup", signup);
app.post("/login", login);
app.post("/user/image", FBAuth, uploadImage);
app.post("/user", FBAuth, addUserDetails);
app.get("/user", FBAuth, getAuthenticatedUser);

// Post Routes
app.get("/posts", getAllPosts);
app.post("/post", FBAuth, postSinglePost);

exports.api = functions.region("europe-west1").https.onRequest(app);
