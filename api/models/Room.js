import mongoose from "mongoose";
 const {Schema}=mongoose;

const RoomSchema=new mongoose.Schema(
    {
        title:{
        type:String,
        required:true

             },
           
             price:{
                type:Number,
                required:true
        
                     },
                     roomNumbers:[{
                        number:Number,
                        unavailabledates:{type:[Date]},
                     }],
    
     
    }


);

export default mongoose.model("Room",RoomSchema)
