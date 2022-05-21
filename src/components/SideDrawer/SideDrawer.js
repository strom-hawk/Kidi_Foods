import React from 'react'
import './SideDrawerStyle.css'

const sideDrawer = props => {
    let drawerClasses = 'side_drawer'
    if(props.show){
        drawerClasses = 'side_drawer open'
    }

    return (
        <nav className={drawerClasses}>
            <ul>
                <li ><a hre='/'>hello</a></li>
                <li ><a hre='/'>hello</a></li>
            </ul>
        </nav>
    )
}

export default sideDrawer