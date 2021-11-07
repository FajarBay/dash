import { AccountBalance, AssignmentInd, AssignmentTurnedIn, CompareArrows, DonutLarge, Equalizer, Inbox, PowerSettingsNew, Print, Settings } from '@material-ui/icons'
import React from 'react'
import './sidebar.css'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarTitle">
                <AccountBalance className="icon"/>
                SIMPEG
            </div>
            <div className="sidebarContainer">
                <div className="sideMenu">
                    <ul className="sideMenuList">
                        <li className="sideMenuItem">
                            <DonutLarge className="iconList"/>
                            Dashboard
                        </li>
                        <li className="sideMenuItem">
                            <AssignmentInd className="iconList"/>
                            Data Pegawai
                        </li>
                        <li className="sideMenuItem">
                            <Inbox className="iconList"/>
                            Kepegawaian
                        </li>
                        <li className="sideMenuItem">
                            <CompareArrows className="iconList"/>
                            Mutasi
                        </li>
                        <li className="sideMenuItem">
                            <AssignmentTurnedIn className="iconList"/>
                            SKP
                        </li>
                        <li className="sideMenuItem">
                            <Equalizer className="iconList"/>
                            Rekapitulasi
                        </li>
                        <li className="sideMenuItem">
                            <Print className="iconList"/>
                            Report
                        </li>
                        <li className="sideMenuItem">
                            <Settings className="iconList"/>
                            Master Setup
                        </li>
                    </ul>
                </div>
                <div className="sideMenu last">
                    <ul className="sideMenuList">
                        <li className="sideMenuItem">
                            <PowerSettingsNew className="iconList"/>
                            Logout
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
