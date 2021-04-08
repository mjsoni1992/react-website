import React, { useState, useEffect } from 'react';
import Heading from "./Heading";
import axios from "axios";
import { EqualHeight, EqualHeightElement } from 'react-equal-height';



const Blogs = () => {
    const [data, setData] = useState();
    const [pageCounter, setPageCounter] = useState(3);
    const [dataFound, setDataFound] = useState(true);
    useEffect(() => {
        axios.get(`http://localhost/thefrontendguy/wp-json/wp/v2/posts?per_page=${pageCounter}`).then((res) => {
            const result = res.data;
            console.log(result);
            setData(result);
        }).catch((error) => {
            console.log(error);
            setDataFound(false);
        });
    }, [pageCounter])
    return (
        <section className="blogSection">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Heading text="Recent Blogs" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <EqualHeight>
                        {data && dataFound && data.map((blog) =>
                            <div className="col-md-4">
                                <div className="imgWrapper" style={{ backgroundImage: `url(${blog.better_featured_image.source_url})` }}>

                                </div>
                                <div className="contentWrapper">
                                    <EqualHeightElement name="Blogs">
                                        <h3 className="blogTitle">{blog.title.rendered}</h3>
                                        <div dangerouslySetInnerHTML={{ __html: blog.excerpt.rendered }} />
                                    </EqualHeightElement>
                                </div>
                            </div>
                        )}
                    </EqualHeight>
                    <div className="col-md-12">
                        <button onClick={() => setPageCounter(pageCounter + 3)}>Load MOre {pageCounter}</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blogs
