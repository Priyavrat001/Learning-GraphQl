import { Response, Request } from "express";
import { User } from "../models/userModels";

export const getAllUsers = async()=>{
    const users = await User.find();

    return users;
};

export const getSingleUser = async(_id:string)=>{
    const user = await User.findById(_id);

    return user;
}

export const createUser = async(req:Request, res:Response)=>{

    const {name, email, password, googleId, role, avatar} = req.body

    const user = await User.create({
        name, email, password, googleId, role, avatar
    });

    return res.status(200).json({success:true, user})
};