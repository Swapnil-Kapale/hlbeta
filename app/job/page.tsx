'use client'

import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import axios from "axios";

interface JobOpening {
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

const Job = () => {
  const [addJobOpening, setAddJobOpening] = React.useState<JobOpening>(
    {
      id: "",
      title: "",
      type: "",
      location: "",
      description: "",
      role: "",
      skills: [],
      experience: 0,
      salary: "",
      status: ""
    }
  );

  const handleAddOpening = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(addJobOpening);

    const response = await axios.post('http://localhost:3000/api/addopening/', addJobOpening);
    console.log(response);
    if (response.data.status === 201) {
      console.log("Job Opening added successfully");
    }else{
      console.log("Job Opening not added");
    }
  }
  
  return (
    <form className="flex flex-col justify-center items w-[1000px] bg-white gap-10">

      <div className="flex gap-16">

        <div className=" flex flex-col gap-4">

          <div className="grid gap-2">
            <Label className="text-lg" htmlFor="id">JobId</Label>
            <Input 
              className="w-96" 
               
              value={addJobOpening.id} 
              onChange={(e) => setAddJobOpening({ ...addJobOpening, id: e.target.value})}
            />
          </div>
          <div className="grid gap-2">
            <Label className="text-lg" htmlFor="title">Title</Label>
            <Input 
              className="w-96" 
              
              value={addJobOpening.title} 
              onChange={(e) => setAddJobOpening({ ...addJobOpening, title: e.target.value })}
            />
          </div>
          <div className="grid gap-2">
            <Label className="text-lg" htmlFor="type">Type</Label>
            <Input 
              className="w-96" 
             
              value={addJobOpening.type} 
              onChange={(e) => setAddJobOpening({ ...addJobOpening, type: e.target.value })}
            />
          </div>
          <div className="grid gap-2">
            <Label className="text-lg" htmlFor="experience">Experience</Label>
            <Input 
              className="w-96" 
             
              value={addJobOpening.experience} 
              onChange={(e) => setAddJobOpening({ ...addJobOpening, experience: parseInt(e.target.value) })}
            />
          </div>
          <div className="grid gap-2">
            <Label className="text-lg" htmlFor="location">Location</Label>
            <Input  
              className="w-96"
             
              value={addJobOpening.location}
              onChange={(e) => setAddJobOpening({ ...addJobOpening, location: e.target.value })}
             />
          </div>

          <div className="grid gap-2">
            <Label className="text-lg" htmlFor="role">Role</Label>
            <Input 
              className="w-96" 
             
              value={addJobOpening.role} 
              onChange={(e) => setAddJobOpening({ ...addJobOpening, role: e.target.value })}
            />

          </div>

        </div>

        <div className="flex flex-col gap-4">

          {/* salary */}
          <div className="grid gap-2">
            <Label className="text-lg" htmlFor="salary">Salary Range</Label>
            <Input 
              className="w-96" 
             
              value={addJobOpening.salary} 
              onChange={(e) => setAddJobOpening({ ...addJobOpening, salary: e.target.value })}
            />
          </div>

          <div className="grid gap-2">
            <Label className="text-lg" htmlFor="skills">Skills</Label>
            <Input 
              className="w-96" 
             
              value={addJobOpening.skills} 
              onChange={(e) => setAddJobOpening({ ...addJobOpening, skills: e.target.value.split(",") })}
            />
            
          </div>

          <div className="grid gap-2">
            <Label className="text-lg" htmlFor="status">Status</Label>
            <Input 
              className="w-96" 
             
              value={addJobOpening.status} 
              onChange={(e) => setAddJobOpening({ ...addJobOpening, status: e.target.value })}
            />
          </div>

          <div className="grid gap-2">
            <Label className="text-lg" htmlFor="description">Description</Label>
            <textarea 
              className="w-96 h-32 border-slate-200 border p-2 hover:border-[#e11d48] active:border-[#e11d48]"  
              
              value={addJobOpening.description}
              onChange={(e) => setAddJobOpening({ ...addJobOpening, description: e.target.value })}
             />
          </div>
        </div>

      </div>

      <div className="flex w-full items-center justify-center">

      <Button className="w-48" type="submit" onClick={handleAddOpening}>Save changes</Button>
      </div>

    </form>
  )
}

export default Job