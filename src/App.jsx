import React from 'react'
import './app.css'
import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar'
import Home from './pages/home/Home'

export default function App() {
    return (
        <div>
            <Sidebar/>
            <Topbar/>
            <div className="container">
                
                <Home/>
            </div>
        </div>
    )
}
