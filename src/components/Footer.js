import React from 'react'
import FooterAbout from './FooterAbout'
import FooterAddress from './FooterAddress'
import FooterContactForm from './FooterContactForm'
import FooterLogo from './FooterLogo'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <FooterLogo className="col-md-3" logo_url="http://localhost:3000/img/logo.png" />
                    <FooterAbout className="col-md-3" title="About Us" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis dolor, mit malesuada non leo a, vehicula ornare nibh. Integer eget." />
                    <FooterAddress className="col-md-3" title="Addres" address="USA, NewYork, 520 E 6th St, NY20005" phone="+91 9033303365" email="mjsoni1992@gmail.com" />
                    <FooterContactForm className="col-md-3" />
                </div>
            </div>
        </footer>
    )
}

export default Footer
