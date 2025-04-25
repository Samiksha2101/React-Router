import React from 'react'
import Navbar from './components/Navbar'
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import About from './pages/About'
import Products from './pages/Products'
import Home from './pages/home'
import ContactLayout from './layout/ContactLayout'
import ContactInfo from './components/ContactInfo'
import ContactForm from './components/ContactForm'
import NotFound from './components/NotFound'
import JobsLayout from './layout/JobsLayout'
import Jobs, { jobLoader } from './pages/Jobs'
import JobDetails, { jobDetailsLoader } from './components/JobDetails'
import Error from './components/Error'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home></Home>}/>
      <Route path='contact' element={<ContactLayout></ContactLayout>}>
        <Route path='info' element={<ContactInfo/>}></Route>
        <Route path='form' element={<ContactForm/>}></Route>
      </Route>
      <Route path='about' element={<About></About>}/>
      <Route path='products' element={<Products></Products>}/>
      <Route path='*' element={<NotFound/>}></Route>
      <Route path='jobs' element={<JobsLayout/>}errorElement={<Error/>}>
        <Route index element={<Jobs/>} loader={jobLoader}></Route>
        <Route path=':id' element={<JobDetails/>} loader={jobDetailsLoader} ></Route>
      </Route>
    </Route>))
  return (
    <RouterProvider router={router}/>
  )
}

export default App