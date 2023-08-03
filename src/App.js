import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Category from './pages/Category'
import NotFound from './pages/NotFound'
import Recipe from './pages/Recipe'
const App = () => {
  return (
    <div>
      <Header/>
      <main className='container content'>
           <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route  path='/about' element={<About/>}/>
            <Route path='/category/:name' element={<Category/>}/>
            <Route path='/meal/:id' element={<Recipe/>}/>
            <Route exact element={<NotFound/>}/>
           </Routes>
      </main>
    </div>
  )
}

export default App