const express=require("express");
const app= express();
const mongoose= require("mongoose");
const cors= require("cors");
app.use(express.json());
app.use(cors());

const PORT=2000;
const MONGO_URL="mongodb+srv://raunakghosh1112:1234@cluster0.83wsbbj.mongodb.net/test";

mongoose.connect(MONGO_URL,{
    useNewUrlParser: true,
}).then(()=>{
    console.log("connected to database");
}).catch((err)=>{ console.log(err)})


require("./dataSchema");
const User=mongoose.model('UserInfo');

app.post("/register",async(req, res)=>{
    const {username,fullname,email,password} = req.body;
    try{
        const oldUser= await User.findOne({email});
        if(oldUser){
           return  res.send({error:"User already exists"});
        }
        await User.create({
            username,fullname,email,password,
        });
        res.send({status: 'success'});
    }catch(err){
        res.send({status: 'error'});
    }
});



app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
})