// api/addopening/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { getDataFromToken } from '@/helper/getDataFromToken';
import JobProfile from '@/app/models/jobDescriptionSchema';
import connectMongoDB from "@/libs/mongodb";
import User from '@/app/models/userSchema';
// import RecruiterInformation from '@/app/models/recruiterScheme';
import ResumeInformation from '@/app/models/resumeInformation';

export async function POST(request: NextRequest) {
  try {

    // connect to the database
    await connectMongoDB();

    // Get the request body
    const body = await request.json();
    console.log(body);

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
      date: Date.now()
    });
   

    const candidateId = body.id;


    // find recruiterinformation collection and push the new job opening
    const userinformation = await ResumeInformation.findOne(candidateId);
    userinformation.jobOpenings.push(newJobOpening);

    // Save the user
    await userinformation.save();

    // Return success response
    return NextResponse.json({ status: 201, message: "Job opening added successfully" });
  } catch (error) {
    // Log the error and return an error response
    console.error("Error adding job opening:", error);
    return NextResponse.json({
      status: 500,
      error: "Error adding job opening"
    });
  }
}
