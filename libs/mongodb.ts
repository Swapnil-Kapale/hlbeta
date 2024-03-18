import mongoose from "mongoose";

const connectMongoDB = async () => {
    try{
        console.log("requested Connection");
        
        const uri = process.env.MONGODB_URI!;
        await mongoose.connect(uri);
        console.log("MongoDB connected successfully");
    }
    catch(err){
        console.log("database connection  failed !!! " , err);
    }
}


export default connectMongoDB;