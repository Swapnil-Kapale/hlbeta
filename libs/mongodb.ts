import mongoose from "mongoose";

const connectMongoDB = async () => {
    try{
        console.log("requested Connection");
        
        // await mongoose.connect("mongodb+srv://murtuzakapasi:THEboss53@cluster0.ivwr4cp.mongodb.net/mentorlink");
        const uri = process.env.MONGODB_URI!;
        await mongoose.connect(uri);
        console.log("MongoDB connected successfully");
    }
    catch(err){
        console.log("database connection  failed !!! " , err);
    }
}


export default connectMongoDB;