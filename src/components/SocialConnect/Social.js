import React from 'react'
import './Social.css'

function Social(props) {
    return (
        <a href={props.hrefLink} target="_blank">
            <img src={props.imageSource} alt={props.alternateName} className='SocialConnectionContent'></img>
        </a>
    )
}

export default Social