"use client";
import React, { use } from "react";
import { useEffect } from "react";
import axios from "axios";
import Image from "next/image";

interface JobDescription {
    _id: string;
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
    date: string;
    user: string;
    __v: number;
}

interface CompanyInfo {
    companyName: string;
    companyAddress: string;
    companyPhone: string;
    companyEmail: string;
    companyWebsite: string;
    companyDescription: string;
    _id: string;
}

interface JobData {
    jobDescription: JobDescription;
    companyInfo: CompanyInfo;
}

interface ContactInformation {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  _id: string;
}

interface Education {
  degree: string;
  school: string;
  major: string | null;
  graduationDate: string;
  _id: string;
}

interface Project {
  title: string;
  date: string | null;
  description: string;
  _id: string;
}

interface Achievement {
  title: string;
  date: string | null;
  _id: string;
}

interface UserInformation {
  _id: string;
  userId: string;
  contactInformation: ContactInformation;
  summary: string;
  education: Education[];
  workExperience: any[]; // Placeholder for work experience, update as needed
  skills: string[];
  certifications: any[]; // Placeholder for certifications, update as needed
  projects: Project[];
  achievements: Achievement[];
  additionalInformation: string | null;
  __v: number;
  jobOpenings: string[];
}



const CandidateDashbord = () => {
  // fetching login recruiter data

//  create a state for candidate
  const [candidate, setCandidate] = React.useState<UserInformation>({
    _id: "",
    userId: "",
    contactInformation: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      _id: "",
    },
    summary: "",
    education: [],
    workExperience: [],
    skills: [],
    certifications: [],
    projects: [],
    achievements: [],
    additionalInformation: "",
    __v: 0,
    jobOpenings: [],
  });


  // create array of job data
  const [jobData, setJobData] = React.useState<JobData[]>([]);

  const fetchData = async () => {
    
    const response = await axios.get("/api/shownotificationspc");
    console.log(response.data.jobData);
    console.log(response.data.userinformation);
    setJobData(response.data.jobData);
    setCandidate(response.data.userinformation);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  return (
    <div className="w-screen h-auto flex flex-col bg-[#f5e8e8]">
      {/* Header */}
      <div className="bg-[#17191c] h-28 border-gray-100 border-b-[1px] py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Image src={"/dark_logo.png"} width={50} height={50} alt={"Logo"} />
          <span className="text-xl text-white font-bold mr-4">HireLink</span>
        </div>
        <div className="relative">
          <div className="flex items-center cursor-pointer">
            <div className="flex flex-col">
              <span className="mr-4 text-white">{candidate.contactInformation.firstName} {candidate.contactInformation.lastName}</span>
              <span className="bg-[#e11d48] text-white w-28 rounded-lg px-4 flex justify-center items-center">
                Candidate
              </span>
            </div>

            <div className="w-12 h-12 rounded-full bg-white flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <g fill="none" stroke="currentColor" stroke-width="2">
                  <path
                    stroke-linejoin="round"
                    d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"
                  />
                  <circle cx="12" cy="7" r="3" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#17191c] h-64 border-gray-100 border-b-4 py-4 px-6 flex flex-col">
        <h1 className="text-white text-xl pt-4">Hello {candidate.contactInformation.firstName}</h1>
        <div className="flex py-4 w-full justify-between">
          <h1 className="text-white font-bold text-3xl">Good Morning</h1>
        </div>

        <div></div>
      </div>



      <div className="flex mt-52 mx-10 gap-x-4 justify-center items-center">

        {/* map over job array */}
        {jobData.map((job, index) => {
          return (
            <div
              key={index}
              className="w-96 h-96 bg-white rounded-lg shadow-lg flex flex-col justify-between items-center p-4"
            >
              <div className="flex flex-col items-center">
                <h1 className="text-2xl font-bold">{job.jobDescription.title}</h1>
                <h1 className="text-lg">{job.jobDescription.location}</h1>
                <h1 className="text-lg">{job.jobDescription.type}</h1>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-lg font-bold">Company Information</h1>
                <h1 className="text-lg">{job.companyInfo.companyName}</h1>
                <h1 className="text-lg">{job.companyInfo.companyAddress}</h1>
                <h1 className="text-lg">{job.companyInfo.companyPhone}</h1>
                <h1 className="text-lg">{job.companyInfo.companyEmail}</h1>
                <h1 className="text-lg">{job.companyInfo.companyWebsite}</h1>
                <h1 className="text-lg">{job.companyInfo.companyDescription}</h1>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-lg font-bold">Job Description</h1>
                <h1 className="text-lg">{job.jobDescription.description}</h1>
                <h1 className="text-lg">{job.jobDescription.role}</h1>
                <h1 className="text-lg">{job.jobDescription.skills}</h1>
                <h1 className="text-lg">{job.jobDescription.experience}</h1>
                <h1 className="text-lg">{job.jobDescription.salary}</h1>
                <h1 className="text-lg">{job.jobDescription.status}</h1>
                <h1 className="text-lg">{job.jobDescription.date}</h1>
                <h1 className="text-lg">{job.jobDescription.user}</h1>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default CandidateDashbord;
