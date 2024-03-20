// api/addopening/route.ts

import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helper/getDataFromToken";
import JobProfile from "@/app/models/jobDescriptionSchema";
import connectMongoDB from "@/libs/mongodb";
import User from "@/app/models/userSchema";
// import RecruiterInformation from '@/app/models/recruiterScheme';
import ResumeInformation from "@/app/models/resumeInformation";
import mongoose from "mongoose";
import RecruiterInformation from "@/app/models/recruiterScheme";
import sendStatusMail from '@/libs/applicarionStatusMail';

export async function POST(request: NextRequest) {
  try {
    // connect to the database
    await connectMongoDB();

    // Get the request body
    const body = await request.json();
    console.log("************************************", body);



    //     candidateId: '65fa8916ac270a78431b9ed3',
    //   jobId: '65fa8c20ac270a78431b9f56'

    // Create a new job opening
    const newJobOpening = new JobProfile({
      id: body.id,
      title: body.title,
      type: body.type,
      location: body.location,
      description: body.description,
      role: body.role,
      skills: body.skills,
      experience: body.experience,
      salary: body.salary,
      status: body.status,
      date: Date.now(),
    });

    const candidateId = new mongoose.Types.ObjectId(body.candidateId);
    console.log(candidateId);

    const jobId = new mongoose.Types.ObjectId(body.jobId);
    console.log(jobId);

    // shantanu 
    const jobData = await JobProfile.findOne(jobId);
    const recruiterinformation = await RecruiterInformation.findOne(jobData.informationRef);
    const companyName = recruiterinformation.companyInformation.companyName;

    // find recruiterinformation collection and push the new job opening
    const userinformation = await ResumeInformation.findOne(candidateId);

    console.log("userInformation:", userinformation);

    // here i want to checck is jobid already present in jobopening arrray if not then push otherwise dont push
    if (!userinformation.jobOpenings.includes(jobId)) {
        // If jobId is not present, push it to the array
        userinformation.jobOpenings.push(jobId);
      }

    // Save the user
    await userinformation.save();

    // Send mail to user
    // sendStatusMail(to, rName, cName, jobTitle, company, status)
    sendStatusMail(userinformation.contactInformation.email,
      " ",
      userinformation.contactInformation.firstName,
      jobData.title,
      companyName,
      "interested"
      );

    // Return success response
    return NextResponse.json({
      status: 200,
      message: "job added successfully",
    });
  } catch (error) {
    // Log the error and return an error response
    console.error("Error adding job opening:", error);
    return NextResponse.json({
      status: 500,
      error: "Error adding job opening",
    });
  }
}
