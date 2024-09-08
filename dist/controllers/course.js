import { Course } from "../models/couseModels.js";
export const getAllCourses = async () => {
    const coureses = await Course.find();
    return coureses;
};
export const getCourseById = async (parent, arg) => {
    const coures = await Course.findById(arg.id);
    return coures;
};
