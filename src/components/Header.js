import React, { useState, useEffect } from 'react'
import Nav from './Nav'

function Header() {
    const [headerClass, setheaderClass] = useState("");

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 110) {
                setheaderClass("sticky");
            }
            else {
                setheaderClass("");
            }

        })
    })
    return (
        <header className={headerClass}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Nav />
                    </div>
                </div>
            </div>

        </header >
    )
}

export default Header
