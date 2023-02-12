import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/global.css'
import SideBar from './components/SideBar/SideBar'
import Router from './Routes'
import { RouterProvider } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='layout'>
      <SideBar />
      <div className="content">
      <RouterProvider router={Router}/>
      </div>
    </div>
  </React.StrictMode>,
)
