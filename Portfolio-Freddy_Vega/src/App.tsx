import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './page/home/Home'
import Project from './page/project/Project'
import Skills from './page/skills/Skills'
import About from './page/about/About'
import Contact from './page/contact/Contact'
import Layout from './components/layout/Layout'
import NoFount from './page/notfound/NoFount'
import AppRoute from './components/router/AppRouter'




function App() {


  return (
    <>
    <AppRoute/>
   
    </>
  )
}

export default App
