import Hotel from "../models/Hotel.js";

export const createHotel=async(req,res,next)=>{
    const newHotel=new Hotel(req.body)
    try{
          const savedHotel=await newHotel.save()
          res.status(200).json(savedHotel)
    }
    catch(err){
        next(err)
    }
}


export const updateHotel=async(req,res,next)=>{
    try{
        const updatedHotel=await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedHotel)
  }
  catch(err){
      next(err)
  }
}

export const deleteHotel=async(req,res,next)=>{
    try{
        const deleteHotel=await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("hotel has been deleted")
  }
  catch(err){
      next(err);
  }
}


export const getHotel=async(req,res,next)=>{
    try{
        const Htel=await Hotel.findById(req.params.id);
        res.status(200).json(Htel)
  }
  catch(err){
     next(err)
  }
}


export const getHotels=async(req,res,next)=>{
    const {min,max, ...others}=req.query;
    try{
        const Htl=await Hotel.find({...others,cheapestPrice:{$gt:min||1,$lt:max||9999}});
        // const Htl=await Hotel.find({...others,cheapestPrice:{$lt:max||9999}});
        res.status(200).json(Htl)
  }
  catch(err){
      next(err);
  }
}

export const countByCity=async(req,res,next)=>{
const cities =req.query.cities.split(",")

    try{
        const list=await Promise.all(cities.map(city=>{
            return Hotel.countDocuments({city:city})
        }))
        res.status(200).json(list)
  }
  catch(err){
      next(err);
  }
}


export const countByTypee=async(req,res,next)=>{
   
    
        try{
            const hotelCount =await Hotel.countDocuments({type:"hotel"});
            const apartmentCount =await Hotel.countDocuments({type:"apartments"});
            const resortCount =await Hotel.countDocuments({type:"resorts"});
            const villaCount =await Hotel.countDocuments({type:"villa"});
            const cabinCount =await Hotel.countDocuments({type:"cabin"});


            res.status(200).json(
            
                [
                    // {"data":44,
                    // "type":"kuchh bhi"}
                   
                    {"typee":"hotel",count:55},
                    {"typee":"apartments",count:apartmentCount},
                    {"typee":"resorts",count:resortCount},
                    {"typee":"villas",count:villaCount},
                    {"typee":"cabins",count:cabinCount}
                ]
                
            );
      }
      catch(err){
          next(err);
      }
    }