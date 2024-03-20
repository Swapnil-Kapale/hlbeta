import connectMongoDB from "@/libs/mongodb";
import { NextRequest, NextResponse } from "next/server";
const bcryptjs = require("bcryptjs");
import ResumeInformation from "@/app/models/resumeInformation";
import User from "@/app/models/userSchema";
import RecruiterInformation from "@/app/models/recruiterScheme";
import sendEmail from "@/libs/sendEmail";

interface ContactInformation {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
}

//  confilect resolve
interface CompanyInformation {
  companyName: string;
  companyAddress: string;
  companyPhone: string;
  companyEmail: string;
  companyWebsite: string;
  companyDescription: string;
}

interface Education {
  degree: string;
  school: string;
  major: string;
  graduationDate: string;
  aggrigateMarks: number;
}

interface WorkExperience {
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  years: number;
}

interface Certification {
  name: string;
  issuingOrganization: string;
  issuedDate: string;
  expiryDate: string;
}

interface Project {
  title: string;
  date: string;
  description: string;
}

interface Achievement {
  title: string;
  date: string;
}

interface AdditionalInformation {
  languages: string[];
  volunteerExperience: string;
  publications: string[];
  interests: string[];
}

interface Reference {
  name: string;
  title: string;
  company: string;
  contactInformation: string;
}

interface security {
  password: string;
  confirmPassword: string;
}
interface role {
  data: string;
}

interface ResumeInformation {
  contactInformation: ContactInformation;
  summary: string;
  education: Education[];
  workExperience: WorkExperience[];
  skills: string[];
  certifications: Certification[];
  projects: Project[];
  achievements: Achievement[];
  additionalInformation: AdditionalInformation;
  references: Reference[];
  security: security;
  role: role;
}

export async function POST(request: NextRequest) {
  console.log("Register route called");

  const body = await request.json();
  console.log(body);

  await connectMongoDB();

  // Hash the password
  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(body.security.password, salt);

  const name =
    body.contactInformation.firstName + " " + body.contactInformation.lastName;
  const email = body.contactInformation.email;
  const userrole = body.role.data;

  console.log("user Role", userrole);

  // Create a new student or mentor
  if (userrole === "candidate") {
    try {
      console.log("Registering a new candidate");

      // Create a new user
      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
        role: userrole,
        informationRef: null,
      });

      await newUser.save();

      // Send Welcome mail to recruiter
      const text = "This is a plain text email";
      sendEmail(newUser.email, text, newUser.role, newUser.name);

      const {
        contactInformation,
        summary,
        education,
        workExperience,
        skills,
        certifications,
        projects,
        achievements,
        additionalInformation,
      } = body;

      const newCandidate = await ResumeInformation.create({
        contactInformation,
        summary,
        education,
        workExperience,
        skills,
        certifications,
        projects,
        achievements,
        additionalInformation,
        jobOpenings: [],
        userId: newUser._id,
      });

      console.log("new candidate", newCandidate);

      // Save the new resume information
      await newCandidate.save();

      // Update the user's informationRef field
      newUser.informationRef = newCandidate._id;

      await newUser.save();

      return NextResponse.json({
        message: "candidate Created.",
      });
    } catch (error) {
      console.error("Error saving new resume information:", error);
      return NextResponse.json({
        message: "Error saving new resume information",
      });
    }
  } else if (userrole === "recruiter") {
    try {
      console.log("Registering a new recruiter");

      // Create a new user
      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
        role: userrole,
        informationRef: null,
      });

      await newUser.save();

      const { contactInformation, companyInformation } = body;
      
      console.log("contactInformation", contactInformation );
      console.log("companyInformation", companyInformation );
      

      const newRecruiter = await RecruiterInformation.create({
        contactInformation,
        companyInformation:{
          companyName: companyInformation.companyName,
          companyAddress: companyInformation.companyAddress,
          companyPhone: companyInformation.companyPhone,
          companyEmail: companyInformation.companyEmail,
          companyWebsite: companyInformation.companyWebsite,
          companyDescription: companyInformation.companyDescription
        },
        jobOpenings: [],
        userId: newUser._id,
      });

      console.log("new recruiter", newRecruiter);

      // Save the new resume information
      await newRecruiter.save();

      // Send Welcome mail to recruiter
      const text = "This is a plain text email";
      sendEmail(newUser.email, text, newUser.role, newUser.name);

      // Update the user's informationRef field
      newUser.informationRef = newRecruiter._id;
      await newUser.save();

      return NextResponse.json({
        message: "recruiter Created.",
      });
    } catch (error) {
      console.error("Error saving new resume information:", error);
      return NextResponse.json({
        message: "Error saving new resume information",
      });
    }
  } else {
    return NextResponse.json({
      message: 'Invalid role. Role must be either "candidate" or "recruiter".',
    });
  }
}
