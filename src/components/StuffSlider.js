import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from './Heading';

function StuffSlider() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost/thefrontendguy/wp-json/wp/v2/stuff`)
            .then(result => setData(result.data));
    }, []);

    var settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '150px',
        slidesToScroll: 1
    };


    const indexNumber = (index) => {
        if (index < 9) {
            return ".0" + (index + 1);
        }
        else {
            return "." + (index + 1);
        }
    }

    return (
        <section class="stuffSliderSection">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Heading text="What can we Do?" />
                    </div>
                </div>
            </div>

            <Slider {...settings}>
                {data.map((item, index) => (
                    <div>
                        <div className="row align-items-center" colorTheme={item.acf.color}>
                            <div className="imageWrapper col-md-4">
                                <img src={item.better_featured_image.source_url} />
                            </div>
                            <div className="contentWrapper col-md-8">
                                <h2 style={{ color: item.acf.color }}>{indexNumber(index)}</h2>
                                <h3>{item.title.rendered}</h3>

                                <div className="stuffDescription" dangerouslySetInnerHTML={{ __html: item.content.rendered }}></div>
                                <div className="buttonWrapper">
                                    <a href="javascript:;" style={{ color: item.acf.color, borderColor: item.acf.color }}>Read More</a>
                                </div>
                            </div>

                        </div>

                    </div>
                ))}
            </Slider>
        </section >
    )
}

export default StuffSlider
