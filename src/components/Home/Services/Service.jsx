import React from 'react';
import './index.css';
import img from '../../../images/doc/doc1.jpg'
import img2 from '../../../images/doc/doc4.jpg'
import img3 from '../../../images/doc/doctor 5.jpg'
import img10 from '../../../images/doc/img10.jpeg'
import img11 from '../../../images/doc/img11.avif'
import img12 from '../../../images/doc/img12.jpeg'
import { Link } from 'react-router-dom';

const Service = () => {
    return (
        <section className="container" style={{marginTop: 200, marginBottom:200}}>
            <div className='mb-5 section-title text-center'>
                <h2>Services</h2>
                {/* <p className='m-0'>Lorem ipsum dolor sit amet consectetur adipisicing.</p> */}
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-sm-6">
                        <div className="service-img">
                            <img src={img10} alt="" className="img-fluid" />
                            <img src={img11} alt="" className="img-fluid mt-4" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="service-img mt-4 mt-lg-0">
                            <img src={img11} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="service-content ps-4 mt-4 mt-lg-0">
                            <h2>Personal care <br />healthy living</h2>
                            <p className="mt-4 mb-5 text-secondary form-text">We've built a healthcare system that puts your needs first. For us, there is nothing more important than the health of you and your loved ones</p>
                            <Link to={'/service'} className="btn-get-started scrollto">Services</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service