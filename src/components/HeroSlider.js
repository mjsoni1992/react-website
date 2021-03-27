import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
function HeroSlider() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost/thefrontendguy/wp-json/wp/v2/heroslider")
            .then(result => setData(result.data));
    }, [])


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="heroSlider">
            <Slider {...settings}>

                {data.map((item) => (
                    <div key={item.id} mehul="mehul">
                        <div className="heroslider-slide" style={{ backgroundImage: `url(${item.better_featured_image.source_url})` }}>
                            <div className="container">
                                <h2 className="sliderTitle">{item.title.rendered}</h2>
                                <div className="sliderDescription" dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}></div>

                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div >
    )
}

export default HeroSlider
