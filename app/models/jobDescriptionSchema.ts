const mongoose = require('mongoose');
const { Schema } = mongoose;

const jobProfileSchema = new Schema({
  // Company Information
  companyName: { type: String, required: true },
  companyAddress: { type: String, required: true },
  companyPhone: { type: String, required: true },
  companyEmail: { type: String, required: true },
  companyWebsite: { type: String, required: true },
  companyDescription: { type: String, required: true },

  // Job Information
  jobTitle: { type: String, required: true },
  jobType: { type: String, enum: ['Full-time', 'Part-time', 'Contract', 'Freelance'], required: true },
  jobCategory: { type: String, required: true },
  jobLocation: { type: String, required: true },
  jobDescription: { type: String, required: true },
  requiredSkills: [{ type: String }],
  experienceLevel: { type: String, required: true },

  // Additional Information
  salaryRange: { type: String },
  benefits: [{ type: String }],
  applicationDeadline: { type: Date, required: true },
  postedDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('JobProfile', jobProfileSchema);

const RecruiterInformation = mongoose.models.jobProfileSchema || mongoose.model('RecruiterInformation', jobProfileSchema);
export default RecruiterInformation;
