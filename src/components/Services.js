import React, { useState, useEffect } from 'react';
import Heading from "./Heading";
import axios from "axios";
import { EqualHeight, EqualHeightElement } from 'react-equal-height';
const Services = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost/thefrontendguy/wp-json/wp/v2/services?per_page=3`).then((res) => {
            console.log(res.data);
            setData(res.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);
    return (
        <section className="servicesSection">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Heading text="Our Services" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <EqualHeight>
                        {data.map((service) =>
                            <div className="col-md-4">
                                <div className="imgWrapper">
                                    <img src={service.better_featured_image.source_url} />
                                </div>

                                <div className="contentWrapper" data-mh="services_equal_height">
                                    <EqualHeightElement name="Services">
                                        <h3 className="serviceTitle">{service.title.rendered}</h3>
                                        <div dangerouslySetInnerHTML={{ __html: service.excerpt.rendered }} />
                                    </EqualHeightElement>
                                </div>


                            </div>
                        )}
                    </EqualHeight>

                </div>
            </div>
        </section>
    )
}

export default Services
