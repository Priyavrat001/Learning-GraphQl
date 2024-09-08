import { Course } from "../models/couseModels.js"
import { Lecture } from "../models/lectureModel.js";

export const getAllCourses = async()=>{
    const coureses = await Course.find();

    return coureses;
}

export const getCourseById = async(parent:any, arg:{id:string})=>{
    const coures = await Course.findById(arg.id);

    return coures;
}

export const getAllLectures = async()=>{
    const lectures = await Lecture.find();

    return lectures;
}

export const getCourses = async(user:any)=>{
    const course = await Course.find({
        instructor:user._id
    });

    return course
}