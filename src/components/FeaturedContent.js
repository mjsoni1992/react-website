import React from 'react'

function FeaturedContent() {
    return (
        <section className="featuredContent">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="featuredImageWrapper">
                            <img src={process.env.PUBLIC_URL + "/img/room.png"} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2>We Find Unique Solutions</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis dolor, mit malesuada non leo a, vehicula ornare nibh. Integer eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis dolor, mit malesuada non leo a, vehicula ornare nibh. Integer eget.</p>
                        <div className="space50"></div>
                        <h2>We Find Unique Solutions</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis dolor, mit malesuada non leo a, vehicula ornare nibh. Integer eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis dolor, mit malesuada non leo a, vehicula ornare nibh. Integer eget.</p>
                        <p><a href="#" className="buttonLink">Read More</a></p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default FeaturedContent
