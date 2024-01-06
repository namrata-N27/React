import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mylandingpage from './modals/components/Mylandingpage';
import Myabout from './modals/components/Myabout';
import Mycertificate from './modals/components/Mycertificat'
import Myplacement from './modals/components/Myplacement'
import Myblog from './modals/components/Myblog'
import Mycontact from './modals/components/Mycontact'
import Myfooter from './modals/share/Myfooter';
import Mycourses from './modals/components/Mycourses';
import Myjava from './modals/components/subcomponent/Myjava';
import Mynavbar from './modals/share/Mynavbar';

function App() {
  return (
    <>
    <BrowserRouter>
    <Mynavbar/>
    <Routes>
      <Route path='/' element={<Mylandingpage/>}/>
      <Route path='about' element={<Myabout/>}/>
      <Route path='certificate' element={<Mycertificate/>}/>
      <Route path='placement' element={<Myplacement/>}/>
      <Route path='blog' element={<Myblog/>}/>
      <Route path='contact' element={<Mycontact/>}/>
      <Route path='courses' element={<Mycourses/>}>
        <Route path='couses/java' element={<Myjava/>}/>
      </Route>
      
    </Routes>
    <Myfooter/>
    </BrowserRouter>
      
    </>
  )
}

export default App
