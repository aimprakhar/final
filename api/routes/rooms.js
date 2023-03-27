import express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/Room.js";
const router =express.Router();

import { createError } from "../utils/error.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";



router.get("/:id",getRoom);
//POST

router.post("/:hotelid",verifyAdmin,createRoom);


//UPDATE

router.put("/:id",verifyAdmin,updateRoom);

//UPDATE

router.delete("/:id/:hotelId",verifyAdmin,deleteRoom);

//GET ALL

router.get("/",getRooms)



export default router;
