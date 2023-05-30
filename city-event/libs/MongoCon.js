import mongoose from "mongoose"

export const connectMongoDB = async()=>{
    if(mongoose.connection.readyState === 1){
        return mongoose.connection.asPromise()
    }
    return await monsoose.connect(process.env.MONGO_URI)
};