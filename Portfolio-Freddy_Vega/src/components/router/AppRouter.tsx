import { Route, Routes } from 'react-router-dom'
import Home from '../../page/home/Home'
import About from '../../page/about/About'
import Contact from '../../page/contact/Contact'
import NoFount from '../../page/notfound/NoFount'
import Project from '../../page/project/Project'
import Layout from '../layout/Layout'
import Cv from '../../page/cv/Cv'




function AppRoute() {


  return (
    <>
    <Routes>
      <Route element={<Layout/>}>
      <Route path='/' element={<Home />}/>
      <Route path='/Projects' element={<Project />}/>
      <Route path='/About me' element={<About />}/>
      <Route path='/Contact' element={<Contact />}/>
      <Route path='/Cv' element={<Cv/>}/>
      </Route>
      <Route path='*' element={<NoFount />}/>
    </Routes>
   
    </>
  )
}

export default AppRoute
