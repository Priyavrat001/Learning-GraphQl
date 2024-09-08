import mongoose from "mongoose";
export const connectToMongo = (mongoUri) => {
    mongoose.connect(mongoUri).then(() => {
        console.log("Mongodb is connected");
    }).catch(err => console.error(err));
};