import mongoose from "mongoose";

const messageModel = new mongoose.Schema({
    senderId:{//reference of user - link between models 
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    receiverId:{//again reference created
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    message:{
        type:String,
        required:true
    }
},{timestamps:true});
export const Message = mongoose.model("Message", messageModel);