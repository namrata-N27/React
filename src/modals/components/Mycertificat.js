import React from 'react'

function Mycertificat() {
  return (
    <>
    <div className='container-fluid mt-5'>
      <div className='row'>
        <div className='col-12'>

          <div className='container rounded mt-5 mb-2'>
            <div className='row justify-content-center'>
              <div className='col-10 shadow rounded'>
              <div className='col-12 text-center mt-4'>
                
                <h1 style={{color:"#1b4584"}}>Apply for Certificate</h1>

              </div>
              
              <form className='cus_pdd mt-3'>
              <div className='row justify-content-center ps-5 pe-5'>
                <div className='col-12 wid_lg_cer'>
  <div className="mb-3 col-12">
    <label className="form-label fw-bold">Name</label>
    <input type="text" className="form-control" placeholder='Name'/>
  
  </div>
  </div>
  </div>
 
 <div className='row justify-content-center ps-5 pe-5'>
  <div className="mb-3 col-xl-6 col-lg-6 col-md-12 col-sm-12 wid_cer">
    <label className="form-label fw-bold ">phone</label>
    <input type="number" className="form-control" placeholder='Phone Number'/>
  </div>

  <div className="mb-3 col-xl-6 col-lg-6 col-md-12 col-sm-12 wid_cer justify-content-center">
    <label className="form-label fw-bold">Email</label>
    <input type="email" className="form-control" placeholder='Email'/>
  </div>
  </div>

  <div className='row justify-content-center ps-5 pe-5'>
  <div className="mb-3 col-xl-6 col-lg-6 col-md-12 col-sm-12 wid_cer">
    <label className="form-label fw-bold">Course</label>
<div className="input-group">
  <select className="form-select" id="inputGroupSelect04">
    <option selected>Select Courses</option>
    <option value="1">Python Full Stack Devloper</option>
    <option value="2">Java Full Stack Devloper</option>
    <option value="3">Mern Full Stack Devloper</option>
    <option value="3">.net Full Stack</option>
  </select>
</div>

  </div>

  <div className="mb-3 col-xl-6 col-lg-6 col-md-12 col-sm-12 wid_cer">
    <label className="form-label fw-bold">Center</label>
   

<div className="input-group">
  <select className="form-select" id="inputGroupSelect04">
    <option selected>Select a Center</option>
    <option value="1">Noida sec-16</option>
    <option value="2">Noida sec-63</option>
    <option value="3">Pitampura</option>
    <option value="3">South ex.</option>
    <option value="3">Ghazizbad</option>
    <option value="3">Gurugram</option>
  </select>
</div>

  </div>
  </div>

  <div className='row justify-content-center ps-5 pe-5'>
  <div className="mb-3 col-xl-6 col-lg-6 col-md-12 col-sm-12 wid_cer">
    <label className="form-label fw-bold">Faculty</label>
    <input type="text" className="form-control" placeholder='Faculty Name'/>
  </div>

  <div className="mb-3 col-xl-6 col-lg-6 col-md-12 col-sm-12 wid_cer">
    <label className="form-label fw-bold">Ducat ID</label>
    <input type="text" className="form-control" placeholder='Duact ID'/>
  </div>
  </div>

  <div className='row justify-content-center ps-5 pe-5'>
  <div className="mb-3 col-xl-6 col-lg-6 col-md-12 col-sm-12 wid_cer">
    <label className="form-label fw-bold">Start Date</label>
    <input type="text" className="form-control" placeholder='Start date'/>
  </div>

  <div className="mb-3 col-xl-6 col-lg-6 col-md-12 col-sm-12 wid_cer">
    <label className="form-label fw-bold">End Date</label>
    <input type="text" className="form-control" placeholder='End date'/>
  </div>
  </div>

    <div className='row mb-3   justify-content-center'>
    {/* <div className='col-12 justify-content-center'>
  <button type="submit" className="rounded border-0 cer_btn_cus text-uppercase">Send&nbsp;Message</button>
  </div> */}

<div className="mb-3 col-10">
    <input type="submit" className="form-control cer_btn_cus" />
  </div>

  </div>
</form>
</div>
              </div>

            </div>
          </div>
         
        </div>
        </div>
      
    </>
  )
}

export default Mycertificat
