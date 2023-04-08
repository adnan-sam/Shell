const mongoose=require('mongoose');
const dataSchema=new mongoose.Schema(
    {
    username:{ type :String,unique:true},
    fullname:String,
    email:{type:String,unique:true},
    password:String,
    },
    {
        collection:"UserInfo",
    }
);
mongoose.model('UserInfo', dataSchema);