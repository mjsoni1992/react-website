import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import TwitterIcon from '@material-ui/icons/Twitter';
const SocialMedia = () => {
    return (
        <section className="socialMedia">
            <ul>
                <li><a href="" target="_blank" title="Opens in a new Window"><FacebookIcon /></a></li>
                <li><a href="" target="_blank" title="Opens in a new Window"><InstagramIcon /></a></li>
                <li><a href="" target="_blank" title="Opens in a new Window"><PinterestIcon /></a></li>
                <li><a href="" target="_blank" title="Opens in a new Window"><TwitterIcon /></a></li>
            </ul>
        </section>
    )
}

export default SocialMedia
