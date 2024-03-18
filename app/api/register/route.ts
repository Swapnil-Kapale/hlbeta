import connectMongoDB from "@/libs/mongodb";
import { NextRequest, NextResponse } from "next/server";
const bcryptjs = require("bcryptjs");
import ResumeInformation from "../../models/resumeInformation";
import User from "../../models/userSchema";

export async function POST(request: NextRequest) {
  console.log("Database");
  

  const body = await request.json();
  console.log(body);

  await connectMongoDB();
  // Hash the password
  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(
    body.security.password,
    salt
  );

  const name =
  body.contactInformation.firstName +
    " " +
    body.contactInformation.lastName;
  const email = body.contactInformation.email;
  const userrole = body.role.data;
  console.log("user Role",userrole);
  

  // Create a new user
  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
    role: userrole,
  });
  await newUser.save();
  const userId = newUser._id;

  // Create a new student or mentor
  if (userrole === "candidate") {
    console.log("called");
    
    const newbody = await ResumeInformation.create(body);
    console.log("new resume information :", newbody);
    

    await newbody.save();
    return NextResponse.json({
        message: 'Success',
      });
    
  } else if (userrole === "recruiter") {
    console.log("recruiter");
  } else {
    return NextResponse.json({
      message: 'Invalid role. Role must be either "student" or "mentor".',
    });
  }
}
