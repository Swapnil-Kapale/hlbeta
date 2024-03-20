import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
const { MongoClient } = require("mongodb");

interface WorkExperience {
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  years: number;
}

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export async function POST(request: NextRequest) {
  
  try {
    console.log("Called");
  
    const body = await request.json();
    console.log("Job Body :",body);
  
    const skillArray = body.skills;
    // const skillArray = ['C','C++','Java','CSS','HTML', 'Flutter'];

    const experience = body.experience;
    // const experience = 1;

    // Connect to the MongoDB Atlas cluster
    await client.connect();

    // Access the resumeinformations collection
    const collection = client.db("HireLinkDb").collection("resumeinformations");

    // Find all documents in the collection
    const cursor = collection.find();

    // Array to store documents with matching score
    const matchedDocuments:any = [];

    // Iterate over the cursor and process each document
    await cursor.forEach((document: any) => {
    // Process each document here
    const documentSkills = document.skills;

    const workExperience = document.workExperience;

    let exp = 0
    workExperience.forEach((workexp:WorkExperience) =>{
        exp = Math.max(exp, workexp.years);
    })
    console.log("=====================workExp : ", exp);
    

     if(exp >= experience){
       // Count matched skills for the current document
       let matchedSkills = 0;
       documentSkills.forEach((skill: string) => {
         if (skillArray.includes(skill)) {
           matchedSkills++;
         }
       });
 
       // Calculate the score as a percentage
       const totalSkills = skillArray.length;
       const scorePercentage = (matchedSkills / totalSkills) * 100;
 
       // Push the document and its matching score to the array
       matchedDocuments.push({ document, scorePercentage });
     }

    });

    // Sort the array based on the matching score in descending order
    matchedDocuments.sort((a, b) => b.scorePercentage - a.scorePercentage);

    // Get the top 5 documents
    const topDocuments = matchedDocuments.slice(0, 5);

    console.log(topDocuments);

    return NextResponse.json({
      status: 200,
      topDocuments: topDocuments,
    });
  } catch (error) {
    console.error("Error logging in:", error);
    return NextResponse.json({
      status: 500,
      error: "Error logging in. Please try again.",
    });
  } finally {
    // Close the MongoDB connection
    await client.close();
  }
}
