const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  addUser,
  updateUsers,
  deletedUsers,
  getOneUser,
} = require("../controllers/userController");

//get
router.get("/allusers", getAllUsers);

//get one user
router.get("/oneuser/:id", getOneUser);

//post
router.post("/creeruser", addUser);

//put
router.put("/modifieruser/:id", updateUsers);

//delete
router.delete("/supprimeruser/:id", deletedUsers);

module.exports = router;
