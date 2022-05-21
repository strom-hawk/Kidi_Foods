import React from 'react'
import './SubscriberNewsLetterStyle.css'
import * as Strings from '../../resources/strings/Strings'

class SubscriberNewsLetter extends React.Component {
    handleSubmit(event){
        console.log('submit clicked')
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input id='newsLetterEditText' type='email' placeholder={Strings.enter_email_hint} className='emailInputField' />
                < input type="submit" value={Strings.subscribe} className='submitButton' />
            </form>
        )
    }
}

export default SubscriberNewsLetter