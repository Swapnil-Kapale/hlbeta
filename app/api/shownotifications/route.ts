// api/addopening/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { getDataFromToken } from '@/helper/getDataFromToken';
import JobProfile from '@/app/models/jobDescriptionSchema';
import connectMongoDB from "@/libs/mongodb";
import User from '@/app/models/userSchema';
import ResumeInformation from '@/app/models/resumeInformation';

export async function POST(request: NextRequest) {

    console.log("show Notifications ======================================================");
    
  try {

    // connect to the database
    await connectMongoDB();

    // const { userId } = getDataFromToken(request);
    // console.log("userId",userId);

    // const userId = 

    // find given user id inside recruiterinformation collection
    const user = await User.findById(userId);
    console.log("user",user.informationRef);

    // find recruiterinformation collection and push the new job opening
    const userinformation = await ResumeInformation.findOne(user.informationRef);
   
    console.log(userinformation);
    



    // Return success response
    return NextResponse.json({ status: 201, message: "" });
  } catch (error) {
    // Log the error and return an error response
    console.error("Error fetching job opening:", error);
    return NextResponse.json({
      status: 500,
      error: "Error fetching job opening"
    });
  }
}
