import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Order from './Pages/Order/Order.jsx'
import List from './Pages/List/List.jsx'
import Add from './Pages/Add/Add.jsx'

const App = () => {
  return (
    <>
      <Navbar />
      <hr/>
      <div className='app-content'>
        <Sidebar/>
        <Routes>
            <Route path='/add' element={<Add />} />
            <Route path='/order' element={<Order />} />
            <Route path='/list' element={<List />} />
            <Route />
        </Routes>
      </div>
    </>
  )
}

export default App
