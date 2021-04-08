import React from 'react'

const FooterLogo = ({ logo_url, className }) => {
    return (
        <div className={className}>
            <img src={logo_url} />
        </div>
    )
}

export default FooterLogo
