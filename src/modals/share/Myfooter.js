import React from 'react'
import { Link } from 'react-router-dom'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {TfiYoutube} from 'react-icons/tfi'
import {FaLinkedinIn} from 'react-icons/fa'

function Myfooter() {
  return (
    <>
    <div className='container-fluid footer_cus'>
        <div className='row'>
          <div className='col-12'>

            
        <div className='container mt-5'>
            <div className='row'>


                <div className='col-xl-2 col-lg-2 col-md-6 col-sm-6 mb-5'>
                  <div className='container'>
                    <div className='row'>
                      <div className='col-12 footer_link_cus'>

                     
                    <h4>Follow Us!</h4>
                    </div>
                    </div>
                  </div>
                    

                  <div className='container'>
                    <div className='row ft_div_cus'>
                    <div className='col-3'>
                  <Link className='social_clr_cus' to='https://www.facebook.com/ducatEducation'><FaFacebookF/></Link>
                   </div>

                   <div className='col-3'>
                  <Link className='social_clr_cus' to=''><BsInstagram/></Link>
                   </div>

                   <div className='col-3'>
                  <Link className='social_clr_cus' to=''><TfiYoutube/></Link>
                   </div>

                   <div className='col-3'>
                  <Link className='social_clr_cus' to=''><FaLinkedinIn/></Link>
                  
                   </div>


                    </div>
                  </div>

                </div>

                <div className='col-xl-2 col-lg-2 col-md-6 col-sm-6 mb-5'>

                  <div className='container mb-3'>
                  <div className='row'>
                    <div className='col-12 footer_link_cus'>
                      <h4>Quick&nbsp;Links</h4>
                    </div>
                  </div>
                  </div>

                  <div className='container'>
                    <div className='row'>
                      <div className='col-12 mb-2'>
                        <Link to='' className='sub_foot'>Java</Link>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-12 mb-2'>
                        <Link to='' className='sub_foot'>Python</Link>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-12 mb-2'>
                        <Link to='' className='sub_foot'>.Net</Link>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-12 mb-2'>
                        <Link to='' className='sub_foot'>Web Designing</Link>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-12 mb-2'>
                        <Link to='' className='sub_foot'>Programming Language</Link>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-12 mb-2'>
                        <Link to='' className='sub_foot'>Cloud Computing</Link>
                      </div>
                    </div>

                  
                  </div>

                </div>

                <div className='col-xl-2 col-lg-2 col-md-6 col-sm-6'>
                <div className='container mb-3'>
                  <div className='row'>
                    <div className='col-12 footer_link_cus'>
                      <h4>Top&nbsp;Courses</h4>
                    </div>
                  </div>
                  </div>

                  <div className='container'>
                    <div className='row'>
                      <div className='col-12 mb-2'>
                        <Link to='' className='sub_foot'>Data Science</Link>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-12 mb-2'>
                        <Link to='' className='sub_foot'>Data Analytics</Link>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-12 mb-2'>
                        <Link to='' className='sub_foot'>Java Full Stack</Link>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-12 mb-2'>
                        <Link to='' className='sub_foot'>Artificial&nbsp;Intelligence</Link>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-12 mb-2'>
                        <Link to='' className='sub_foot'>UI & UX Designing</Link>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-12 mb-2'>
                        <Link to='' className='sub_foot'>Cloud Computing</Link>
                      </div>
                    </div>

                  
                  </div>

                </div>

                <div className='col-xl-2 col-lg-2 col-md-6 col-sm-6 '>

                <div className='container mb-3'>
                  <div className='row'>
                    <div className='col-12 footer_link_cus'>
                      <h4>Privacy&nbsp;Policy</h4>
                    </div>
                  </div>
                  </div>

                  <div className='container'>
                    <div className='row'>
                      <div className='col-12 mb-2'>
                        <Link to='' className='sub_foot'>Privacy Policy</Link>
                      </div>
                    </div>

                </div>
                </div>

                <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12 '>

                <div className='container mt-5'>
                  <div className='row'>
                    <div className='col-12 footer_link_cus'>
                      <p>Join&nbsp;our&nbsp;mailing&nbsp;list&nbsp;and&nbsp;get&nbsp;exclusive&nbsp;discounts, early product launch access and more.</p>
                    </div>
                  </div>
                  </div>

                  <div  className='container mb-5'> 
                  <div className='row'>
                    <div className='col-12'>

                    <div className="input ">
  <input type="text" className="form-control mb-4" placeholder="Email addres" aria-describedby="button-addon2"/>
  <button className="btn btn-primary join_btn_cus border-0 "  type="button" id="button-addon2">Join</button>
</div>

                    </div>
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

export default Myfooter
