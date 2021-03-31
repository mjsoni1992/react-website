import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from './Heading';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

function Portfolio() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost/thefrontendguy/wp-json/wp/v2/portfolio`)
            .then(result => setData(result.data));
    }, []);

    const sliderRef = useRef(null);
    const goToNext = () => {
        sliderRef.current.slickNext();
    }
    const goToPrev = () => {
        sliderRef.current.slickPrev();
    }
    var settings = {
        dots: false,
        autoplay: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        centerMode: false,
        centerPadding: '150px',
        slidesToScroll: 1
    };
    return (
        <section class="portfolioSliderSection">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Heading text="Our Portfolio" />
                    </div>
                </div>
            </div>
            <div className="row m-0">
                <div className="col-md-8 p-0">
                    <Slider {...settings} ref={sliderRef}>
                        {data.map((item, index) => (
                            <div>
                                <div className="row align-items-center m-0" colorTheme={item.acf.color}>
                                    <div className="imageWrapper col-md-12" style={{ backgroundImage: `url(${item.better_featured_image.source_url})` }}>
                                        <img src={item.better_featured_image.source_url} />
                                    </div>
                                </div>

                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="col-md-4 p-3">
                    <h2 className="text-white mb-5">Lorem Isum<br></br> Site Manet dollar <br></br>sit amen</h2>

                    <div className="sldierNavigations">
                        <NavigateBeforeIcon fontSize="large" className="text-white" onClick={goToPrev} />
                        <NavigateNextIcon fontSize="large" className="text-white" onClick={goToNext} />

                    </div>
                </div>
            </div>
        </section >
    )
}

export default Portfolio
