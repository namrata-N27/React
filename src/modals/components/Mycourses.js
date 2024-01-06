import React from 'react'
import { Outlet } from 'react-router-dom'

function Mycourses() {
  return (
    <>
       
    <div className='container-fluid  mt-5'>
    <div className='row'>
      <div className='col-md-2 mt-5'>
      
            <h1>courses</h1>
            <div className='col-10 mt-5'>
              <Outlet></Outlet>
            </div>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Mycourses
