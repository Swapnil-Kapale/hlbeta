import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export async function POST(request: NextRequest) {
  console.log("Called");

  try {
    const skillArray = [
      "HTML5, CSS3, JavaScript",
      "SQL, MongoDB",
      "Git, GitHub",
      "XAMPP",
      "Python",
      "PyTorch",
      "Neural Networks",
      "CNNs, RNNs",
      "C",
      "C++",
      "Java",
      "DSA",
      "Computer Networks",
    ];

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
    });

    // Sort the array based on the matching score in descending order
    matchedDocuments.sort((a, b) => b.scorePercentage - a.scorePercentage);

    // Get the top 5 documents
    const top5Documents = matchedDocuments.slice(0, 5);

    console.log(top5Documents);

    return NextResponse.json({
      status: 200,
      top5Documents: top5Documents,
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
