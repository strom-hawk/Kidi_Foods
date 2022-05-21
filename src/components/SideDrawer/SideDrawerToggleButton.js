import React from 'react'
import './SideDrawerToggleButton.css'

const drawerToggleButton = props => (
    <button className='drawer_toggle_button' onClick={props.click}>
        <div className='drawer_toggle_button_line'/>
        <div className='drawer_toggle_button_line'/>
        <div className='drawer_toggle_button_line'/>
    </button>
)

export default drawerToggleButton