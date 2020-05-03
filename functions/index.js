const functions = require("firebase-functions");
const app = require("express")();
const FBAuth = require("./utility/fbAuth");

const {
  getAllPosts,
  postSinglePost,
  getPost,
  commentOnPost,
  likePost,
  unlikePost,
} = require("./handlers/posts");
const {
  signup,
  login,
  uploadImage,
  addUserDetails,
  getAuthenticatedUser,
} = require("./handlers/users");

// Post Routes
app.get("/posts", getAllPosts);
app.post("/post", FBAuth, postSinglePost);
app.get("/post/:postId", getPost);

app.get("/post/:postId/like", FBAuth, likePost);
app.get("/post/:postId/unlike", FBAuth, unlikePost);
app.post("/post/:postId/comment", FBAuth, commentOnPost);

// Users Routes
app.post("/signup", signup);
app.post("/login", login);
app.post("/user/image", FBAuth, uploadImage);
app.post("/user", FBAuth, addUserDetails);
app.get("/user", FBAuth, getAuthenticatedUser);

exports.api = functions.region("europe-west1").https.onRequest(app);
