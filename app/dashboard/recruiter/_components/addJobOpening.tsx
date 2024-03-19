import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
export function DrawerDialog() {
  const [open, setOpen] = React.useState(false)
  const [addJobOpening, setAddJobOpening] = React.useState<JobOpening>(
    {
      id: "JB-XXXX",
      title: "Senior Frontend Developer",
      type: "Full-time",
      location: "pune",
      description: "We are looking for a senior frontend developer to join our team.",
      role: "Senior Frontend Developer",
      experience: 5,
      salary: "10-15 LPA",
      skills: ["React", "TypeScript", "GraphQL"],
      status: "Open",
    }
  );

  const handleAddOpening = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(addJobOpening);

    const response = await axios.post('http://localhost:3000/api/addopening/', addJobOpening);
    console.log(response);
    if (response.data.status === 201) {
      console.log("Job Opening added successfully");
      setOpen(false);
    }else{
      console.log("Job Opening not added");
    }
  }
 
    return (

      <Dialog  open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Add Opening</Button>
        </DialogTrigger>
        <DialogContent className="w-auto pl-10">
          <DialogHeader>
            <DialogTitle className="text-2xl">Add Job Opening</DialogTitle>
            <DialogDescription className="text-lg pb-10">
              Add a new job opening to the list of available positions.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm/>
        </DialogContent>
      </Dialog>
    )

function ProfileForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col justify-center items w-[1000px] bg-white gap-10", className)}>

      <div className="flex gap-16">

        <div className=" flex flex-col gap-4">

          <div className="grid gap-2">
            <Label className="text-lg" htmlFor="id">JobId</Label>
            <Input 
              className="w-96" 
              id="id" 
              value={addJobOpening.id} 
              onChange={(e) => setAddJobOpening({ ...addJobOpening, id: e.target.value })}
            />
          </div>
          <div className="grid gap-2">
            <Label className="text-lg" htmlFor="title">Title</Label>
            <Input 
              className="w-96" 
              id="title" 
              value={addJobOpening.title} 
              onChange={(e) => setAddJobOpening({ ...addJobOpening, title: e.target.value })}
            />
          </div>
          <div className="grid gap-2">
            <Label className="text-lg" htmlFor="type">Type</Label>
            <Input 
              className="w-96" 
              id="type" 
              value={addJobOpening.type} 
              onChange={(e) => setAddJobOpening({ ...addJobOpening, type: e.target.value })}
            />
          </div>
          <div className="grid gap-2">
            <Label className="text-lg" htmlFor="experience">Experience</Label>
            <Input 
              className="w-96" 
              id="experience" 
              value={addJobOpening.experience} 
              onChange={(e) => setAddJobOpening({ ...addJobOpening, experience: parseInt(e.target.value) })}
            />
          </div>
          <div className="grid gap-2">
            <Label className="text-lg" htmlFor="location">Location</Label>
            <Input  className="w-96"id="location" defaultValue="Remote" />
          </div>

          <div className="grid gap-2">
            <Label className="text-lg" htmlFor="role">Role</Label>
            <Input 
              className="w-96" 
              id="role" 
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
              id="salary" 
              value={addJobOpening.salary} 
              onChange={(e) => setAddJobOpening({ ...addJobOpening, salary: e.target.value })}
            />
          </div>

          <div className="grid gap-2">
            <Label className="text-lg" htmlFor="skills">Skills</Label>
            <Input 
              className="w-96" 
              id="skills" 
              value={addJobOpening.skills} 
              onChange={(e) => setAddJobOpening({ ...addJobOpening, skills: e.target.value.split(",") })}
            />
            
          </div>

          <div className="grid gap-2">
            <Label className="text-lg" htmlFor="status">Status</Label>
            <Input 
              className="w-96" 
              id="status" 
              value={addJobOpening.status} 
              onChange={(e) => setAddJobOpening({ ...addJobOpening, status: e.target.value })}
            />
          </div>

          <div className="grid gap-2">
            <Label className="text-lg" htmlFor="description">Description</Label>
            <textarea 
              className="w-96 h-32 border-slate-200 border p-2 hover:border-[#e11d48] active:border-[#e11d48]"  
              id="description" 
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
}
