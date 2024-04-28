const express = require("express");
const router = express.Router();
const posts = require("../controllers/posts.controller");

/* users CRUD
router.post("/users", users.create);
router.get("/users", users.list);
router.get("/users/:id", users.details);
router.patch("/users/:id", users.update); // actualiza info parcial
//router.put("/users/:id", users.update);  sustituye toda la info
router.delete("/users/:id", users.delete);
*/

// posts CRUD
router.post("/api/posts", posts.create);
router.get("/api/posts", posts.list);
router.get("/api/posts/:id", posts.details);
router.patch("/api/posts/:id", posts.update);
router.delete("/api/posts/:id", posts.delete);


module.exports = router;