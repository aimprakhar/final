import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/Users.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router =express.Router();




// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     res.send ("hello user you are logged in")
// });
// router.get("/authentication",verifyToken,(req,res,next)=>{
//     res.send ("hello user you are logged in")
// })

// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     res.send ("hello user you are logged in and now you can delete your account")
// })

// router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
//     res.send ("hello admin you are logged in and now you can delete all account")
// })


 router.get("/:id",verifyUser,getUser);


//UPDATE

router.put("/:id",verifyUser,updateUser);

//UPDATE

router.delete("/:id",verifyUser,deleteUser);

//GET ALL

 router.get("/",verifyAdmin,getUsers)











export default router;
