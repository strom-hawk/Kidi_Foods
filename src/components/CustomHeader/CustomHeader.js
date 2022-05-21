import React from 'react'
import logo from '../../resources/images/main_logo.png'
import './CustomHeaderStyle.css'
import SideDrawerToggleButton from '../SideDrawer/SideDrawerToggleButton'
import HeaderItem from '../HeaderItem/HearderItem'

class CustomHeader extends React.Component {

    render() {
        return (
            <div className='header_layout'>
                <div className='header_navigation'>
                    <div className='header_toggle_button'>
                        <SideDrawerToggleButton click={this.props.drawerClickHandler}/>
                    </div>
                    <img src={logo} className='header_logo' />
                    {/* <div className='blank_space'/> */}
                    <div className='header_navigation_items'>
                        <ul>
                            <a><HeaderItem title="Portfolio"/></a>
                            <a><HeaderItem title="Services"/></a>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomHeader