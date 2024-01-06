import React from 'react'
import {GoSearch} from 'react-icons/go'
import {GiBrain} from 'react-icons/gi'
// import BRAINICON from '../photos/asset7.png'
import {PiCertificateThin} from 'react-icons/pi'
import {ImOffice} from 'react-icons/im'
import {BsPersonPlus} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function Mylandingpage() {
  return (
    < >
    <div className='container mt-5'>
        <div className='row'>

        <div className='col-6 slider_txt_cus'>
            <div id="carouselExampleInterval " className="carousel slide " data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="2000">
      <h1 className="d-block w-100">Let us help you kick start your career and archive your goals with us.</h1>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <h1 className="d-block w-100">Unlock your pontatial
      with us, and watch your career dreams come to life </h1>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <h1 className="d-block w-100">Your success is our mission, 
      and we're dedicated to helping you reach your goals </h1>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <h1 className="d-block w-100">Unlock your pontatial
      with us, and watch your career dreams come to life </h1>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <h1 className="d-block w-100">Your success is our mission, 
      and we're dedicated to helping you reach your goals </h1>
    </div>
    
  </div>
</div>
 </div>



            <div className='col-6 slider_cus'>
            <div id="carouselExampleInterval " className="carousel slide " data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="2000">
      <img src="/images/asset1.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="/images/asset2.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item " data-bs-interval="2000">
      <img src="/images/asset3.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item " data-bs-interval="2000">
      <img src="/images/asset4.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item " data-bs-interval="2000">
      <img src="/images/asset5.png" className="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
</div>
 </div>
    </div>
    
    <div className='container'>
      <div className='row'>
        <div className='col-md-12 col-lg-6 col-xl-6 col-sm-12'>
<div className="input-group input_search">
  <input type="text" className="form-control " placeholder="Search your favourite cource today."aria-describedby="button-addon2"/>
  <button className=" " type="button" id="button-addon2"><GoSearch/></button>
</div>
</div>
      </div>
    </div>


    <div className='container-fluid mt-3'>
      <div className='row'>
        <div className='cotainer-fluid full_another_nav '>
          <div className='row'>
            <div className='col-12'>
              <div className='container '>
                <div className='row another_nav'>


                <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 '>
                  <section><GiBrain/><span> Learn The Essential Skill</span></section>
                  </div>

                  <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 '>
                  <section><PiCertificateThin/><span> Earn Certificates And Degree</span></section>
                  </div>

                  <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 '>
                  <section><ImOffice/><span> Get Ready For The Next career </span></section>
                  </div>

                  <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 '>
                  <section><BsPersonPlus/><span> Master At Different Areas</span></section>
                  </div>


                </div>
              </div>

            </div>
          </div>
        </div>

        <div className='cotainer-fluid login_row sticky-bottom b-0'>
          <div className='row'>
            <div className='col-12 mt-3 ps-5 pe-5'>
                  <div className='row'>

                    <div className='col-xl-2 col-lg-2 col-md-6 col-sm-12 mb-2'>
                    <section><input className='form-control' type='text' placeholder='Enter Name' aria-label="Enter Name" aria-describedby="button-log" /></section>
                    </div>

                    <div className='col-xl-2 col-lg-2 col-md-6 col-sm-12 mb-2'>
                    <section><input className='form-control' type='text' placeholder='Enter Email' aria-label="Enter Email" aria-describedby="button-log" /></section>
                    </div>

                    <div className='col-xl-2 col-lg-2 col-md-6 col-sm-12 mb-2'>
                    <section><input className='form-control' type='text' placeholder='Enter Contact Number' aria-label="Enter Contact Number" aria-describedby="button-log" /></section>
                    </div>

                    <div className='col-xl-2 col-lg-2 col-md-6 col-sm-12'>
                    <section className="input-group mb-2">
  <input type="text" className="form-control" aria-label="Select Cource" placeholder='Select Cource'/>
  <button className="dropdown-toggle login_btn_cus" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
  <ul className="dropdown-menu dropdown-menu-end">
    <li><Link className="dropdown-item" to="#">Python Full Stack Devloper</Link></li>
    <li><Link className="dropdown-item" to="#">Java Full Stack Devloper</Link></li>
    <li><Link className="dropdown-item" to="#">Mern Full Stack Devloper</Link></li>
    <li><Link className="dropdown-item" to="#">.net Full Stack </Link></li>
  </ul>
</section>
</div>

<div className='col-xl-2 col-lg-2 col-md-12 col-sm-12'>
<section className="input-group mb-3">
  <input type="text" className="form-control" aria-label="Select Branch" placeholder='Select Branch'/>
  <button className=" dropdown-toggle login_btn_cus" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
  <ul className="dropdown-menu dropdown-menu-end">
    <li><Link className="dropdown-item" to="#">Noida sec-16</Link></li>
    <li><Link className="dropdown-item" to="#">Noida sec-63</Link></li>
    <li><Link className="dropdown-item" to="#">Pitampura</Link></li>
    <li><Link className="dropdown-item" to="#">South ex.</Link></li>
    <li><Link className="dropdown-item" to="#">Ghazizbad.</Link></li>
    <li><Link className="dropdown-item" to="#">Gurugram</Link></li>
  </ul>
</section>
</div>

<div className='col-xl-2 col-lg-2 col-md-12 col-sm-12 mb-3'>
  <section>
<button className=" btn  fw-bold" style={{backgroundColor:"#ffcc00"}} type="submit">Submit</button>
{/* <input className='btn fw-bold' style={{backgroundColor:"#ffcc00"}} type='Submit'/> */}
</section>
</div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container mt-5'>
          <div className='row '>
            <div className='col-10'>
              <h2>Explore Top Programs</h2>
              </div>
              <div className='col-2 ps-0'> 
              <Link className='text-dark fs-5'>View&nbsp;All</Link>
              </div>
          </div>


          <div className='row mt-4 '>
          <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
<div className="card mb-3 shadow border-0  overflow-hidden expl_crd_cus_clr mb-3"  >
  <div className="row g-0">
    <div className="col-md-4  crd_img-bg_cus">
      <img src="./images/asset11.png" className="img-fluid rounded-start " alt="..." />
    </div>
    <div className="col-md-8"  >
      <div className="card-body">
        <h5 className="card-title">Graphic Designing Traning </h5>
      </div>
    </div>
  </div>
</div>
</div>

<div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
<div className="card mb-3 shadow border-0  overflow-hidden expl_crd_cus_clr mb-3 " >
  <div className="row g-0">
    <div className="col-md-4  crd_img-bg_cus">
      <img src="./images/asset12.png" className="img-fluid rounded-start " alt="..."  />
    </div>
    <div className="col-md-8 "  >
      <div className="card-body">
        <h5 className="card-title">DevOps</h5>
      </div>
    </div>
  </div>
</div>
</div>

<div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
<div className="card mb-3 shadow border-0  overflow-hidden expl_crd_cus_clr mb-3" >
  <div className="row g-0">
    <div className="col-md-4  crd_img-bg_cus">
      <img src="./images/asset13.png" className="img-fluid rounded-start " alt="..." />
    </div>
    <div className="col-md-8 " >
      <div className="card-body">
        <h5 className="card-title">MIS</h5>
      </div>
    </div>
  </div>
</div>
</div>

          <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
<div className="card mb-3 shadow border-0  overflow-hidden expl_crd_cus_clr mb-3"  >
  <div className="row g-0">
    <div className="col-md-4  crd_img-bg_cus">
      <img src="./images/asset14.png" className="img-fluid rounded-start " alt="..." />
    </div>
    <div className="col-md-8 "  >
      <div className="card-body">
        <h5 className="card-title">Clous Computing</h5>
      </div>
    </div>
  </div>
</div>
</div>

<div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
<div className="card mb-3 shadow border-0  overflow-hidden expl_crd_cus_clr mb-3 " >
  <div className="row g-0">
    <div className="col-md-4  crd_img-bg_cus">
      <img src="./images/asset15.png" className="img-fluid rounded-start " alt="..."  />
    </div>
    <div className="col-md-8 "  >
      <div className="card-body">
        <h5 className="card-title">Multimedia & Animation</h5>
      </div>
    </div>
  </div>
</div>
</div>

<div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
<div className="card mb-3 shadow border-0  overflow-hidden expl_crd_cus_clr mb-3" >
  <div className="row g-0">
    <div className="col-md-4  crd_img-bg_cus">
      <img src="./images/asset16.png" className="img-fluid rounded-start " alt="..." />
    </div>
    <div className="col-md-8 " >
      <div className="card-body">
        <h5 className="card-title">Web Designing</h5>
      </div>
    </div>
  </div>
</div>
</div>

          <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
<div className="card mb-3 shadow border-0  overflow-hidden expl_crd_cus_clr mb-3"  >
  <div className="row g-0">
    <div className="col-md-4  crd_img-bg_cus">
      <img src="./images/asset17.png" className="img-fluid rounded-start " alt="..." />
    </div>
    <div className="col-md-8 "  >
      <div className="card-body">
        <h5 className="card-title">Dta Analytics Using Python</h5>
      </div>
    </div>
  </div>
</div>
</div>

<div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
<div className="card mb-3 shadow border-0  overflow-hidden expl_crd_cus_clr mb-3" >
  <div className="row g-0">
    <div className="col-md-4  crd_img-bg_cus">
      <img src="./images/asset18.png" className="img-fluid rounded-start " alt="..."  />
    </div>
    <div className="col-md-8 "  >
      <div className="card-body">
        <h5 className="card-title">Digital Marketing</h5>
      </div>
    </div>
  </div>
</div>
</div>

<div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
<div className="card shadow border-0  overflow-hidden expl_crd_cus_clr mb-3" >
  <div className="row g-0">
    <div className="col-md-4 crd_img-bg_cus">
      <img src="./images/asset19.png" className="img-fluid rounded-start " alt="..." />
    </div>
    <div className="col-md-8  " >
      <div className="card-body">
        <h5 className="card-title">Java Full Stack Devloper</h5>
      </div>
    </div>
  </div>
</div>
</div>
</div>








          </div>

          <div className='container mt-5'>
            <div className='row'>
              <div className='col-12'>
                <h1 className='text-center'>Our Learners Work At </h1>
             
                <p className='text-center fs-4 work_nav_cus'>Ducat learners work at Some of the leading and 
                inovative organizations of today, solving core business problems.</p>
               
              </div>
            </div>
          </div>


          <div className='container'>
            <div className='row'>
              <div className='col-12'>
              <OwlCarousel className='owl-theme owl_sld_cus' loop margin={10} nav>
   
    <div className='item'>
    <img src='./images/asset20.png' alt='...'/>
    </div>
    <div className='item'>
    <img src='./images/asset21.png' alt='...'/>
    </div>
    <div className='item'>
    <img src='./images/asset22.png' alt='...'/>
    </div>
    <div className='item'>
        <img src='./images/asset23.png' alt='...'/>
    </div>
    <div className='item'>
        <img src='./images/asset24.png' alt='...'/>
    </div>
    <div className='item'>
        <img src='./images/asset25.png' alt='...'/>
    </div>
    <div className='item'>
        <img src='./images/asset26.png' alt='...'/>
    </div>
    <div className='item'>
        <img src='./images/asset27.png' alt='...'/>
    </div>
    <div className='item'>
        <img src='./images/asset28.png' alt='...'/>
    </div>
    <div className='item'>
        <img src='./images/asset29.png' alt='...'/>
    </div>

</OwlCarousel>
              </div>
            </div>
          </div> 
        
        </>
  )
}

export default Mylandingpage
