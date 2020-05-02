const functions = require("firebase-functions");

const app = require("express")();

const FBAuth = require("./utility/fbAuth");

const { getAllPosts, postSinglePost } = require("./handlers/posts");
const { signup, login, uploadImage } = require("./handlers/users");

// Post Routes
app.get("/posts", getAllPosts);
app.post("/post", FBAuth, postSinglePost);

// Users Routes
app.post("/signup", signup);
app.post("/login", login);
app.post("/user/image", FBAuth, uploadImage);

exports.api = functions.region("europe-west1").https.onRequest(app);
