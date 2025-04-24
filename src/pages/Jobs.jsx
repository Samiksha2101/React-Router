import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

function Jobs() {
    const jobs = useLoaderData()
  return (
    <div className='jobs'>
        {jobs.map((job)=>{
            return <Link>
            <h4>{job.title}</h4>
            <p>{job.location}</p>
            <p>{job.description}</p>
            </Link>
        })}
    </div>
  )
}

export default Jobs

export const jobLoader = async()=>{
    const data = await fetch("http://localhost:5000/jobs")
    return data.json();
}