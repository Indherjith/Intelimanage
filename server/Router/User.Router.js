const {Router} = require("express");
const {signup,login} = require("../Controller/User.Controller")

const UserRouter = Router();

UserRouter.post("/signup",signup);
UserRouter.post("/login",login);

module.exports = {UserRouter}