import React from 'react'
import { Link } from 'gatsby'
import useSocialMedia from '../../../hook/useSocialMedia'

const SocialMediaBtn = () => {
    const socialM = useSocialMedia();
    return (
        <div className='contents'>
            <ul className='rounded-3xl bg-white pt-16 pb-5 contents'>
                {socialM.map((item, index) => {
                    const {
                        socialMediaLogo, url
                    } = item;
                    return (
                        <li role="navigation" aria-label="Main" key={index}>
                            <Link to={url}>
                                <img src={socialMediaLogo.url} alt="Social Media Btn" className="w-10" width="500" height="600" />
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default SocialMediaBtn