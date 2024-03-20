// Import necessary modules
import { NextRequest, NextResponse } from "next/server";
import User from "@/app/models/userSchema";
var bcryptjs = require('bcryptjs');
var jwt = require('jsonwebtoken');
import connectMongoDB from "@/libs/mongodb";

// Connect to MongoDB

export async function POST(request: NextRequest) {
    try {
        await connectMongoDB();
        // Destructure email and password from the request JSON body
        const { email, password } = await request.json();
        console.log(email, password);
        
        const user = await User.findOne({ email });

        if (!user) {
            // If the user is not found, return an error response
            console.log({
                error: "User does not exist."
            });
            return NextResponse.json({ 
                status: 404,
                error: "User does not exist." 
            });
        }
        // Compare the password
        const validPassword = await bcryptjs.compare(password, user.password);
        console.log(validPassword);

        if (!validPassword) {
            // If the password is invalid, return an error response
            return NextResponse.json({ 
                status: 401,
                error: "Invalid password." });
        }

        console.log("User logged in successfully.");

        // Create token data
        const tokenData = {
            id: user._id,
            email: user.email,
            role: user.role
        };

        // Create a token with an expiration of 1 hour
        const jwtSecret = "your_secret_key"; // Replace "your_secret_key" with your actual secret key
        const token = jwt.sign(tokenData, jwtSecret, { expiresIn: '1h' });

        // Return success response with token
        const response =  NextResponse.json({
            status : 200,
            message: "Successfully logged in.",
            role : user.role,
            id: user._id
        });

        response.cookies.set("token", token, {
            httpOnly: true
        });

        return response;
    } catch (error) {
        // Log the error and return an error response
        console.error("Error logging in:", error);
        return NextResponse.json({ 
            status: 500,
            error: "Error logging in. Please try again." });
    }
}