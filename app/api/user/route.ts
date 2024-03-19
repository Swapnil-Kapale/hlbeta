import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helper/getDataFromToken";
import connectMongoDB from "@/libs/mongodb";
import User from "@/app/models/userSchema";
import RecruiterInformation from "@/app/models/recruiterScheme";
import JobProfile from "@/app/models/jobDescriptionSchema";

interface JobOpening {
    id: string;
    title: string;
    type: string;
    location: string;
    description: string;
    role: string;
    skills: string[];
    experience: number;
    salary: string;
    status: string;
}

export async function GET(request: NextRequest) {
    await connectMongoDB();
    try {
        const { userId } = getDataFromToken(request);
        const data = await User.findOne({ _id: userId });
        const recruiter = await RecruiterInformation.findOne({ _id: data.informationRef }).select('jobOpenings');

        const jobOpenings = recruiter.jobOpenings;
        const jobOpeningsDataPromises = jobOpenings.map(async (job: any) => {
            const jobData = await JobProfile.findOne({ _id: job });
            return jobData;
        });

        const jobOpeningsData = await Promise.all(jobOpeningsDataPromises);

        console.log("jobOpeningsData", jobOpeningsData);

        return NextResponse.json({
            message: "Success",
            data: data,
            jobOpeningsData: jobOpeningsData // Sending jobOpeningsData in response
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' });
    }
}
