import React from 'react'
import BBG from '../photos/blogbg.png'

function Myblog() {
  return (
    <>
    <div className='container-fluid mt-5'>
      <div className='row'>
        <div className='col-12 mt-5'>
          <div className='blog_banner'>
          <img src={BBG} alt='blog banner'/>
          </div>
        
        </div>
      </div>
    </div>
      
    </>
  )
}

export default Myblog
