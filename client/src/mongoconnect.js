const { default: mongoose } = require("mongoose");

// mongosh -- shell for interact
// mongod --server onn
//mongoose --npm package

mongoose.connect("mongodb://127.0.0.1:27017/sample").then
(

    ()=>{console.log("connected to mongoose")}
    
).catch(
             ()=>{console.log("not connected to mongoose")}
       );


       
const student = new mongoose.Schema({name:String,height:Number})

const Student=new mongoose.model("Student",student);


const adder =async()=>{
    const ss=new Student({name:"abhishek",height:7});
    await ss.save();

    //2nd and preferred way
    const ss1=await Student.create({
        name:"ABHIII",
        height:90
    })
}


adder();