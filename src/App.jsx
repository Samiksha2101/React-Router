import React from 'react'
import Navbar from './components/Navbar'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import About from './pages/About'
import Products from './pages/Products'
import Home from './pages/home'
import Contact from './pages/Contact'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home></Home>}/>
      <Route path='contact' element={<Contact></Contact>}/>
      <Route path='about' element={<About></About>}/>
      <Route path='products' element={<Products></Products>}/>

    </Route>))
  return (
    <RouterProvider router={router}/>
  )
}

export default App