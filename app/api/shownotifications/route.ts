import { NextRequest, NextResponse } from 'next/server';
import { getDataFromToken } from '@/helper/getDataFromToken';
import JobProfile from '@/app/models/jobDescriptionSchema';
import connectMongoDB from "@/libs/mongodb";
import User from '@/app/models/userSchema';
import ResumeInformation from '@/app/models/resumeInformation';
import mongoose from 'mongoose';
import RecruiterInformation from '@/app/models/recruiterScheme';

export async function POST(request: NextRequest) {

    console.log("show Notifications ======================================================");
    
    try {
        // connect to the database
        await connectMongoDB();

        // Assuming tempid is the ID string you have
        const body = await request.json();

        console.log("body :",body);
        
        const tempid = body.id;
        // const tempid = "65fa8916ac270a78431b9ed0";

        // Convert tempid to ObjectId
        const candidateId = new mongoose.Types.ObjectId(tempid);

        // Find user by ID
        const user = await User.findById(candidateId);
        console.log("user", user.informationRef);

        // Find recruiterinformation collection and push the new job opening
        const jobArray = [];
        const userinformation = await ResumeInformation.findOne(user.informationRef);
        
        console.log("********", userinformation.jobOpenings);

        // Loop through each job opening
        for (const element of userinformation.jobOpenings) {
            // Find job profile by ID
            const jobDescription = await JobProfile.findOne(element);

            const user1 = jobDescription.user;

            const rc1 = await User.findOne(user1);

            const rcinfo1 = rc1.informationRef;

            const recuriterinformation = await RecruiterInformation.findOne(rcinfo1);

            const companyInfo  = recuriterinformation.companyInformation;




            
            // Push job description to the array
            jobArray.push({jobDescription:jobDescription, companyInfo:companyInfo});
        }

        console.log("Job Array:", jobArray);

        // Return success response
        return NextResponse.json({ status: 200, message: "Job openings fetched successfully", jobData : jobArray });
    } catch (error) {
        // Log the error and return an error response
        console.error("Error fetching job openings:", error);
        return NextResponse.json({
            status: 500,
            error: "Error fetching job openings"
        });
    }
}
