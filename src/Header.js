import React from 'react'
import "./Header.css"
import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { useStateValue } from "./StateProvider"

function Header() {

    const [{user}] = useStateValue();

    return (
        <div className="header">
            <div className="header_left">
                <Avatar
                alt={user?.displayName}
                src={user?.photoURL}/>
                <ScheduleIcon/>
            </div>
            <div className="header_search">
                <SearchIcon/>
                <input className="search" placeholder="Ezerka Technology Solutions"/>
            </div>
            <div className="header_right">
                <HelpOutlineIcon/>
            </div>
        </div>
    )
}

export default Header
