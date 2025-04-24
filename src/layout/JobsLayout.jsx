import React from 'react'
import { Outlet } from 'react-router-dom'

function JobsLayout() {
  return (
    <div>
        <h2>Jobs Openings </h2>
        <p>List of current job openings in the company</p>
        <Outlet/>
    </div>
  )
}

export default JobsLayout