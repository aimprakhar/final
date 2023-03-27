
import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
export const createRoom=async(req,res,next)=>{
    const hotelId=req.params.hotelid;
    const newRoom=new Room(req.body);

    try{
        const savedRoom=await newRoom.save();

        try{
            await Hotel.findByIdAndUpdate(hotelId,{$push:{rooms:savedRoom._id},});

        }

        catch(err){
           next(err);
        }
        res.status(200).json(savedRoom);

    }

    catch(err){
        next(err);
    }
}






export const updateRoom=async(req,res,next)=>{
    try{
        const updatedRoom=await Room.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedRoom)
  }
  catch(err){
      next(err)
  }
}

export const deleteRoom=async(req,res,next)=>{
    const hotelId=req.params.hotelid;
    try{
        const deleteRoom=await Room.findByIdAndDelete(req.params.id)

        try{
            await Hotel.findByIdAndUpdate(hotelId,{$pull:{rooms:req.param.id}})
        }
        catch(err){
            next(err);
        }


        res.status(200).json("hotel has been deleted")
  }
  catch(err){
      next(err);
  }
}


export const getRoom=async(req,res,next)=>{
    try{
        const Rtel=await Room.findById(req.params.id);
        res.status(200).json(Rtel)
  }
  catch(err){
     next(err)
  }
}

export const getRooms=async(req,res,next)=>{
    try{
        const Rtl=await Room.find()
        res.status(200).json(Rtl)
  }
  catch(err){
      next(err);
  }
}