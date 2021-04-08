import React from 'react'

const FooterAddress = ({ title, address, phone, email, className }) => {
    return (
        <div className={className}>
            <h3>{title}</h3>
            <p>{address}</p>
            <p>{phone}</p>
            <p>{email}</p>
        </div>
    )
}

export default FooterAddress
