import React from 'react'
import './CustomFooterStyle.css'
import * as Strings from '../../resources/strings/Strings'
import * as Info from '../../utils/Info'
import * as AppConstants from '../../utils/AppConstants'
import linkedIn from '../../resources/images/linkedin.png'
import twitter from '../../resources/images/twitter.png'
import google from '../../resources/images/googleplus.png'
import whatsapp from '../../resources/images/whatsapp.png'
import Social from '../SocialConnect/Social'
import facebook from '../../resources/images/facebook.png'
import ic_location from '../../resources/images/ic_location.png'
import ic_call from '../../resources/images/ic_call.png'
import ic_mail from '../../resources/images/ic_mail.png'
import SubscriberNewsLetter from '../SubsNewsLetter/SubscriberNewsLetter'


class CustomFooter extends React.Component {
render() {
    return (
        <div >
            <div className='FooterMainContent'>
                <div className='reachUsAtStyle'>
                    <h5 >{Strings.reach_us_at}</h5>
                    
                <div className='imageTextContainer'>
                    <img src={ic_location} alt={Strings.location} className='imageView'></img>
                    <h5 className='reachUsContentStyle'>{Info.contact_address}</h5>
                    </div>
                    
                    <div className='imageTextContainer'>
                    <img src={ic_call} alt={Strings.call} className='imageView'></img>
                    <h5 className='reachUsContentStyle'>{Info.contact_person}</h5>
                    </div> 
                    
                    <div className='imageTextContainer'>
                    <img src={ic_mail} alt={Strings.email} className='imageView'></img>
                    <h5 className='reachUsContentStyle'>{Info.contact_email}</h5>
                    </div>
                </div>

                <div className='ContactUsStyle'>
                    <h5>{Strings.company}</h5>
                    <h5 className='LinksStyle'>{Strings.careers}</h5>
                    <h5 className='LinksStyle'>{Strings.investors}</h5>
                    <h5 className='LinksStyle'>{Strings.funding}</h5>
                    <h5 className='LinksStyle'>{Strings.privacy_policy}</h5>
                    <h5 className='LinksStyle'>{Strings.terms_and_conditions}</h5>
                </div>

                <div className='NewsLetterParentLayout'>
                    <h5>{Strings.subs_to_newsletter}</h5>
                    <SubscriberNewsLetter />
                </div>
            </div>
            <hr />

            <div className='SocialConnectionMainContent'>
                <Social
                    hrefLink={AppConstants.FACE_BOOK}
                    imageSource={facebook}
                    alternateName="facebook" />

                <Social
                    hrefLink={AppConstants.WHATS_APP}
                    imageSource={whatsapp}
                    alternateName="whatsapp" />

                <Social
                    hrefLink={AppConstants.LINKED_IN}
                    imageSource={linkedIn}
                    alternateName="linkedIn" />

                <Social
                    hrefLink={AppConstants.GOOGLE_PLUS}
                    imageSource={google}
                    alternateName="google" />

                <Social
                    hrefLink={AppConstants.TWITTER}
                    imageSource={twitter}
                    alternateName="twitter" />
            </div>

            <div className='RightsReservedContent'>
                <h5 className='RightsReserved'>{Strings.all_rights_reserved}</h5>
        </div>
        </div>
    )
}
}

export default CustomFooter