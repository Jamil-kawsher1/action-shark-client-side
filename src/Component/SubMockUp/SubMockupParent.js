import { Grid } from '@mui/material';
import React from 'react';
// import SubMockUp from './SubMockUp';
import moc1 from '../../Component/img/mock1.png';
import mock2 from '../../Component/img/mock2.png';
import mock3 from '../../Component/img/mockup3.png';
import './SubMockup.css'
const SubMockupParent = () => {
    return (
        <div className='mockup-grid'>

            <div className="mockupbox">
                <div className="text-box">

                    <p className='heading1'>DISC UPTO 50%</p>
                    <h5 className='heading2'>NEW DIGITAL CAMERA </h5>
                    <h5 className='heading3'>WITH TILT LENS</h5>
                </div>
                <img className='img1' src={moc1} alt="" />
                <div className="mockup">


                </div>


            </div>

            <div className="mockupbox-2">
                <div className="text-box-2">

                </div>
                <img className='img2' src={mock2} alt="" />
                <div className="mockup-2">


                </div>
                <div className="innertext-2">


                    <p className='heading1-b1'>WIDE CAMERA</p>
                    <h3 className='heading3-b3'>Photograph Camera</h3>
                    <h3 className='heading3-b3'>For Professional</h3>
                </div>

            </div>
            <div className="mockupbox-3">
                <div className="text-box-3">

                    <p style={{ fontSize: '15px' }} className='heading1-b1'>REMOTE LENS</p>
                    <h5 className='heading2-b3'>New Lenses With A </h5>
                    <h5 className='heading3-b3'>Million Effects</h5>
                </div>
                <img className='img3' src={mock3} alt="" />
                <div className="mockup-3">


                </div>
                <div className="innertext-3">


                    {/* <p className='heading1-b1'>WIDE CAMERA</p>
                        <h3 className='heading3-b3'>Photograph Camera</h3>
                        <h3 className='heading3-b3'>For Professional</h3> */}
                </div>

            </div>

        </div>
    );
};

export default SubMockupParent;