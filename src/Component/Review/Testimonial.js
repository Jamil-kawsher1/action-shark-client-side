import React from 'react';
import './Testimonial.css';
import peopleone from '../../Component/img/people1.png'
const Testimonial = () => {
    return (
        <div style={{ margin: '10px 0' }}>
            <div className="main-container-testimonial">

                <p style={{ color: '#19D3AE', fontSize: '20px', fontWeight: 'bolder' }}>Testimonial</p>
                <h3 style={{ fontSize: '32px' }}>What Our Customer Says</h3>
                <div className="testimonial-box-container">

                    <div className="testimonial-box">

                        <p style={{ fontSize: '14px', padding: '10px', textAlign: 'justify' }}>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>

                        <div className="img-person">

                            <div className="img-circle">





                                <img style={{ width: '98%', height: 'auto' }} src={peopleone} alt="" />
                            </div>
                            <span style={{ margin: '5px', textAlign: "justify" }}>Winson Herry <br />California</span>


                        </div>

                    </div>
                    <div className="testimonial-box">


                        <p style={{ fontSize: '14px', padding: '10px', textAlign: 'justify' }}>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>

                        <div className="img-person">

                            <div className="img-circle">





                                <img style={{ width: '98%', height: 'auto' }} src={peopleone} alt="" />
                            </div>
                            <span style={{ margin: '5px', textAlign: "justify" }}>Winson Herry <br />California</span>



                        </div>


                    </div>
                    <div className="testimonial-box">



                        <p style={{ fontSize: '14px', padding: '10px', textAlign: 'justify' }}>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                        <div className="img-person">

                            <div className="img-circle">





                                <img style={{ width: '98%', height: 'auto' }} src={peopleone} alt="" />
                            </div>
                            <span style={{ margin: '5px', textAlign: "justify" }}>Winson Herry <br />California</span>



                        </div>



                    </div>




                </div>



            </div>
        </div>
    );
};

export default Testimonial;