const {Router} = require("express");
const {signup,login,alluser} = require("../Controller/User.Controller")

const UserRouter = Router();

UserRouter.get("/",alluser);
UserRouter.post("/signup",signup);
UserRouter.post("/login",login);

module.exports = {UserRouter}