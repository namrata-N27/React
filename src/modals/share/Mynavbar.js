import React from 'react'

import { NavLink } from 'react-router-dom'

function Mynavbar() {
  return (
    <>
    <div className='conntainer-fluid  fixed-top '>
      <div className='row n_cus'>
    <div className='container'>
        <div className='row'>
            <div className='col-12 nav_cus'>
            <nav className="navbar navbar-expand-lg mt-2">
  <div className="container">
    <img className="navbar-brand" src='/images/asset0.png' alt='logo' />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse nav_menu_cus" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="about">About&nbsp;us</NavLink>
        </li>
          <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" to="courses" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Courses
            </NavLink>
            <ul className="dropdown-menu">
              <li><NavLink className="dropdown-item" to="courses/java"> Java</NavLink></li>
              <li><NavLink className="dropdown-item" to=".net">.net</NavLink></li>
              <li><NavLink className="dropdown-item" to="python">Python</NavLink></li>
              <li><NavLink className="dropdown-item" to="webdesigining-fullstackdevelopment">Web Desigining -Full Stack Development</NavLink></li>
              <li><NavLink className="dropdown-item" to="softwaretesting">Software Testing</NavLink></li>
              <li><NavLink className="dropdown-item" to="programinglanguage">Pograming Language</NavLink></li>
              <li><NavLink className="dropdown-item" to="cloudcomputer">Cloud Computering</NavLink></li>
              <li><NavLink className="dropdown-item" to="mobileaplicationdevlopment">Mobile Application Devlopment</NavLink></li>
              <li><NavLink className="dropdown-item" to="cadtarining">CAD Training</NavLink></li>
              <li><NavLink className="dropdown-item" to="networ&security">Network & Security</NavLink></li>
              <li><NavLink className="dropdown-item" to="digitalmarketing">Digital Marketing</NavLink></li>
            </ul>
          </li>
        {/* <li className='nav-item'>
  <select className="form-select border-0 pt-2" style={{width:"105px"}} >
    <option selected>Courses</option>
    <option value="1">Python Full Stack Devloper</option>
    <option value="2">Java Full Stack Devloper</option>
    <option value="3">Mern Full Stack Devloper</option>
    <option value="3">.net Full Stack</option>
  </select>
  </li> */}
        <li className="nav-item">
          <NavLink className="nav-link " to="certificate">Certificate</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="placement">Placement</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="blog">Blog</NavLink>
        </li>
        <li>
        <NavLink className="nav_btn_cus" type="submit" to='contact'>Contact&nbsp;Us</NavLink>
        </li>
      </ul>
      </div>
  </div>
</nav>
            </div>
        </div>
    </div>
    </div>
    </div>
      
    </>
  )
}

export default Mynavbar





// import React from 'react'

// function Mynavbar() {
//   return (
//     <>
//     <header className='header'>
//       <div className='conatiner'>
//     <div className='row'>
//       <div className='col-12'>
//       <div className='container'>
//       <nav className="navbar navbar-expand-lg navbar-light">
//   <div className="container-fluid pl=0">
//     <a className="navbar-brand" to="/">
//       <img src='/images/asset0.png' alt='logo' className='image-fluid'/>
//     </a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo3" aria-controls="navbarTogglerDemo3" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Link</a>
//         </li>
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><a className="dropdown-item" href="#">Action</a></li>
//             <li><a className="dropdown-item" href="#">Another action</a></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><a className="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
//         </li>
//       </ul>
//       <form className="d-flex">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
//       </div>
//     </div>
//     </div>
//     </div>
//     </header>
//     </>
//   )
// }

// export default Mynavbar
