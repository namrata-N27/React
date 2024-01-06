import React from 'react'
import CONBG from '../photos/contactusbg.jpeg'

function Mycontact() {
  return (
    <>
    <div className='container-fluid '>
      <div className='row'>
      <div className='col-12 p-0 about_banner'>
          <img src={CONBG} alt='...' className='w-100'/>
         
            <div className='container '>
              <div className='row form-contact'>
              <div className='col-7 contact_content'>
                <div className='row justify-content-center'>
                  <div className='col-8'>
                <h3 className='contact_form_h pt-2'>Connect With Us</h3>
                <p className='contact_form_p'>For further questions, including partnership opportunities, please email mail
                <span> to: info@ducatindia.com</span> or contact using our contact form.
                </p>

                <form>
  <div className="form-row mt-4 my-4">
    <div className='col-md-6 form_group'>
    <label for="name" className="form-label">Full Name</label>
    <input type="text" className="form-control" placeholder='name'/>
    </div>
  
  <div className="mb-3">
    <label className="form-label">Email</label>
    <input type="email" className="form-control"/>
  </div>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

                </div>
                </div>


              </div>
              </div>
            </div>
          </div>
          </div>
      </div>
  
      
    </>
  )
}

export default Mycontact
