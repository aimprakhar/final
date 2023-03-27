import express from "express";
import { countByCity,  countByTypee, createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
const router =express.Router();

import { createError } from "../utils/error.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

// CRUD 
// Create Read Update Delete
// Post   Get   Put   Delete

//READ
router.get("/bbb",(req,res)=>{
    res.send("Hello , this is hotels end-point1")
})



router.get("/find/:id",getHotel);
router.get("/find/",getHotels)
//POST

router.post("/",createHotel);


//UPDATE

router.put("/:id",verifyAdmin,updateHotel);

//UPDATE

router.delete("/:id",verifyAdmin,deleteHotel);

//GET ALL
router.get("/countByCity",countByCity)
router.get("/countByTypee",countByTypee)













export default router;
