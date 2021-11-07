import { AccountCircle } from '@material-ui/icons'
import React from 'react'
import './topbar.css'

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <input type="text" placeholder="Search..."/>
                    <button className="buttonSearch">Cari</button>
                </div>
                <div className="topRight">
                    <div className="topRightContent">
                        <span>Notification</span>
                    </div>
                    <div className="topRightContent">
                        <AccountCircle fontSize="large"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
