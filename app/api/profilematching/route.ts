// Import necessary modules
import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";

const { MongoClient } = require('mongodb');

// Connect to MongoDB
const uri = 'your_mongodb_atlas_uri';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


export async function POST(request: NextRequest) {
    console.log("Called");
    
    try {
    // Connect to the MongoDB Atlas cluster
    await client.connect();

    // Access the resumeinformations collection
    const collection = client.db("HireLinkDb").collection("resumeinformations");

    // Find all documents in the collection
    const cursor = collection.find();

    // Iterate over the cursor and process each document
    await cursor.forEach((document:any) => {
      // Process each document here
      console.log(document);
    });



        
    } catch (error) {
        console.error("Error logging in:", error);
        return NextResponse.json({ 
            status: 500,
            error: "Error logging in. Please try again." });
    }
}