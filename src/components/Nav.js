import React, { useState, useEffect } from 'react'
import axios from 'axios';


function Nav() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost/thefrontendguy/wp-json/menus/v1/menus/main-navigation")
            .then(result => setData(result.data.items));
    }, []);




    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand text-white" href="#"><img className="logo" alt="Logo" src={process.env.PUBLIC_URL + '/img/logo.png'} /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        {data.map((item, index) => (
                            <>
                                <li key={item.ID} className={"nav-item" + (item.child_items ? " dropdown" : "")}>
                                    <a className={"nav-link text-white " + (item.child_items ? "dropdown-toggle" : "")} href={item.url} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{item.title}</a>
                                    {item.child_items ?
                                        <div key={item.child_items.ID} className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            {item.child_items.map((childItem, index) => (
                                                <li key={item.child_items.ID}><a className="dropdown-item nav-link text-dark" href={childItem.url}>{childItem.title}</a></li>
                                            ))}
                                        </div> : ""}
                                </li>
                            </>
                        ))}
                    </ul>

                </div>
            </nav>
        </div >
    )
}

export default Nav
