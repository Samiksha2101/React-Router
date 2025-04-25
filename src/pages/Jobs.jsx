import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

function Jobs() {
    const jobs = useLoaderData()
  return (
    <div className='jobs'>
        {jobs.map((job)=>{
            return <Link to={job.id} key={job.id}>
            <h4>{job.title}</h4>
            <p>{job.location}</p>
            {/* <p>{job.description}</p> */}
            </Link>
        })}
    </div>
  )
}

export default Jobs

export const jobLoader = async () => {
    try {
      const response = await fetch("http://localhost:5000/jobs");
  
      if (!response.ok) {
        throw new Error("Could not fetch job list");
      }
  
      return await response.json();
    } catch (error) {
      throw new Error("Unable to connect to the job server");
    }
  };