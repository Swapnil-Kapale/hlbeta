import { NextRequest } from "next/server";
var jwt = require('jsonwebtoken');

export const getDataFromToken = (request: NextRequest) => {
    try {
        const token = request.cookies.get("token")?.value || '';

        console.log("token", token);

        const jwtSecret = "your_secret_key"; 
        const decodedToken:any = jwt.verify(token, jwtSecret);
        const role = decodedToken.role;
        const userId = decodedToken.id;

        return {userId, role};
    } catch (error: any) {
        throw new Error(error.message);
    }
}