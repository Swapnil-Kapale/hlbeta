import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
	region: process.env.NEXT_PUBLIC_AWS_S3_REGION,
	credentials: {
		accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID,
		secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
	}
});


async function uploadFileToS3(file, fileName) {

	const fileBuffer = file;
	console.log(fileName);

	const params = {
		Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME,
		Key: `${fileName}`,
		Body: fileBuffer,
		ContentType: "image/jpg"
	}

	try{
		const command = new PutObjectCommand(params);
		await s3Client.send(command);
		console.log("File uploaded to S3");
		return fileName;
	}catch(e){
		console.log(e);
		return e;
	}

	// const command = new PutObjectCommand(params);
	// await s3Client.send(command);
	// console.log("File uploaded to S3");
	// return fileName;
}

export async function POST(request) {
	try {

		const formData = await request.formData();
		const file = formData.get("file");
		console.log("got file: ",file);

		if(!file) {
			return NextResponse.json( { error: "File is required."}, { status: 400 } );
		} 

		const buffer = Buffer.from(await file.arrayBuffer());
		const fileName = await uploadFileToS3(buffer, file.name);

		return NextResponse.json({ success: true, fileName});
	} catch (error) {
		return NextResponse.json({ error });
	}
}