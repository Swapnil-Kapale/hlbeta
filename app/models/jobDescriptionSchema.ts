// models/jobDescriptionSchema.ts

import mongoose, { Schema, Document } from 'mongoose';

// Define the interface for JobOpening
export interface JobOpening extends Document {
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

// Define the job profile schema
const jobProfileSchema = new Schema({
  // Recruiter Information
  user: { type: Schema.Types.ObjectId, ref: 'User' },

  // Job Information
  id: { type: String, required: true },
  title: { type: String, required: true },
  type: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  role: { type: String, required: true },
  skills: { type: [String], required: true },
  experience: { type: Number, required: true },
  salary: { type: String, required: true },
  status: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

// Export the JobProfile model
export default mongoose.models.JobProfile || mongoose.model<JobOpening>('JobProfile', jobProfileSchema);
