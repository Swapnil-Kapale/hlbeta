import mongoose, { Schema } from "mongoose";
import User from "../models/userSchema";

interface CompanyInformation {
  companyName: string;
  companyAddress: string;
  companyPhone: string;
  companyEmail: string;
  companyWebsite: string;
  companyDescription: string;
}

const contactInformationSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  address: { type: String },
});

const companyInformationSchema = new Schema({
  companyName: { type: String },
  companyAddress: { type: String },
  companyPhone: { type: String },
  companyEmail: { type: String },
  companyWebsite: { type: String },
  companyDescription: { type: String },
});  

  
const recruiterSchema = new Schema({
  contactInformation: contactInformationSchema,
  companyInformation: companyInformationSchema,
  jobOpenings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'JobOpening' }],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
});

const RecruiterInformation = mongoose.models.RecruiterInformation || mongoose.model('RecruiterInformation', recruiterSchema);
export default RecruiterInformation;
