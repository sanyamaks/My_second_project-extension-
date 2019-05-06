import React from 'react'
import {Link} from "react-router-dom"

const Sidebar = (props) => {
    return (
        <div className='Sidebar__Link'>
            <li className="home" title={props.nameTitleLink}>
                <Link to='/My_second_project-extension-'>{props.nameTitleLink}</Link>
            </li>
        </div>


    )

}

export default Sidebar;