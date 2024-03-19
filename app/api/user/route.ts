import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helper/getDataFromToken";
import connectMongoDB from "@/libs/mongodb";
import User from "@/app/models/userSchema";
import RecruiterInformation from "@/app/models/recruiterScheme";

export async function GET(request: NextRequest) {
    await connectMongoDB();
    try {

        const {userId} = getDataFromToken(request);
        console.log("userId",userId);
        
        const data = await User.findOne({ _id: userId }).select('name');
        console.log("data",data);

        // const recruiter = await RecruiterInformation.findOne(userId).select('skills qualification about github linkedin');
        
        // console.log("recruiter",recruiter);

        return NextResponse.json({
            message: "Success",
            data: data,
        }); 
    } catch (error) {
        console.error(error);
        NextResponse.json({ error: 'Internal Server Error' });
    }
}