import User from "../models/User.js";




export const updateUser=async(req,res,next)=>{
    try{
        const updatedUser=await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedUser)
  }
  catch(err){
      next(err)
  }
}

export const deleteUser=async(req,res,next)=>{
    try{
        const deleteUser=await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted")
  }
  catch(err){
      next(err);
  }
}


export const getUser=async(req,res,next)=>{
    try{
        const Htel=await User.findById(req.params.id);
        res.status(200).json(Htel)
  }
  catch(err){
     next(err)
  }
}


export const getUsers=async(req,res,next)=>{
    try{
        const Htl=await User.find()
        res.status(200).json(Htl)
  }
  catch(err){
      next(err);
  }
}