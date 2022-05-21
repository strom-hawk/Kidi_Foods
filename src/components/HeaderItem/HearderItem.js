import React from 'react'
import Typography from '@material-ui/core/Typography'

class HeaderItem extends React.Component{

    render(){
        return(
            <div>
                <Typography>{this.props.title}</Typography>
            </div>
        )
    }
}

export default HeaderItem