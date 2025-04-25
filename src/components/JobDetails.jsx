import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

function JobDetails() {
    // const {id} = useParams()
    const jobDetail = useLoaderData()
  return (
    <div className='jobdetails'><p><b>JobDetails : </b>{jobDetail.title}</p>
    <p><b>Salary : </b>{jobDetail.salary}</p>
    <p><b>Job Location</b>{jobDetail.location}</p>
    <p><b>Job Description</b>{jobDetail.description}</p>
    <button>Apply</button>
    </div>
  )
}

export default JobDetails

export const jobDetailsLoader=async({params})=>{
    const {id} = params;
    const res = await fetch("http://localhost:5000/jobs/"+id)
    return res.json()
}