import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    whatYouWillLearn:[
        {
            type:String,
            required:true
        }
    ],
    level:{
        type:String,
        required:true,
        enum:["Bigginer", "Intermidate", "Adavanced"]
    },
    language:{
        type:String,
        required:true,
        enum:["English", "Hindi"]
    },
    price:{
        type:Number,
        required:true
    },
    instructor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Lecture"
    },
    isRejected:{
        type:Boolean,
        reuired:true
    },
    isFeatured:{
        type:Boolean,
        reuired:true
    },
    isPopular:{
        type:Boolean,
        reuired:true
    },
    isTrending:{
        type:Boolean,
        reuired:true
    },
    isBeastseller:{
        type:Boolean,
        required:true,
    },
    isFree:{
        type:Boolean,
        required:true
    },
    coverImage:{
        type:String,
        required:true
    }
});

export const Course = mongoose.model("Course", schema)