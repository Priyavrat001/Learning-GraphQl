import { User } from "../models/userModels";
export const getAllUsers = async () => {
    const users = await User.find();
    return users;
};
export const createUser = async (req, res) => {
    const { name, email, password, googleId, role, avatar } = req.body;
    const user = await User.create({
        name, email, password, googleId, role, avatar
    });
    return res.status(200).json({ success: true, user });
};
