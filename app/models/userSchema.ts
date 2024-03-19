import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true},
    password: { type: String , required: true},
    role: { type: String},
    // ref to recruiter or candidate
    informationRef: { type: Schema.Types.ObjectId, ref: 'RecruiterInformation' || 'CandidateInformation' }
});

const User = mongoose.models.User || mongoose.model('User', userSchema)
export default User;