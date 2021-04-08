import React from 'react'

const FooterAbout = ({ title, description, className }) => {
    return (
        <div className={className}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default FooterAbout
