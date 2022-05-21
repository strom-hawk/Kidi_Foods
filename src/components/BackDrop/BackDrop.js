import React from 'react'
import './BackDrop.css'

class BackDrop extends React.Component{
    render(){
        return(
            <div className='back_drop' onClick={this.props.click}></div>
        )
    }
}

export default BackDrop