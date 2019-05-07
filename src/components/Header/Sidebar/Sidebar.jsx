import React from 'react'
import {Link} from "react-router-dom"

const Sidebar = (props) => {
    return (
            <li className="Sidebar__Link" title={props.nameTitleLink}>
                <Link to={'/My_second_project-extension-/' + props.pathTitleLink}>{props.nameTitleLink}</Link>
            </li>


    )

}

export default Sidebar;