import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Profile from './Components/Profile'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
    <Route path='' element={<App/>}/>
    <Route path='profile' element={<Profile/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
