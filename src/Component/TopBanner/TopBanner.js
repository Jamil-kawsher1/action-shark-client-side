import React from 'react';
import { Swiper, SwiperSlide, navigation } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import './TopBanner.css';
import mainbanner from '../img/professional-digital-lens-.png'
// swiper core styles
import 'swiper/swiper.min.css';
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper';


// modules styles
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import { Grid } from '@mui/material';


const TopBanner = () => {


    return (
        < >
            <Grid className='main-container' container spacing={5}>
                <Grid className='' item xs={12} md={6}>

                    <div style={{ fontFamily: 'Bai Jamjuree,sans-serif', textAlign: 'justify', padding: '10px' }} className="inner-div-2">
                        <div style={{}}>


                            <h2 style={{ fontSize: '14px', fontWeight: '400', textTransform: 'uppercase', letterSpacing: '3px' }}>Shop To Get What You Love</h2>

                            <h2 className='main-2nd-hading-small-dev' style={{ fontWeight: '600', }}>Ready To Spoil <br /> Every Moment</h2>
                            <p className='p-small-dev' style={{ fontSize: '16px', fontFamily: 'Montserrat,sans-serif', fontWeight: 'bolder' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utelit tellus <br /> luctus nec ullamcorper mattis pulvinar ipsum dolor.</p>
                            <button style={{ letterSpacing: '2px', textTransform: 'uppercase', }} className='btn-banner'>Get Started</button>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className="inner-div">


                        <div className='circle'>
                            <div className="camera-img">

                                <img src={mainbanner} alt="" />
                            </div>
                        </div>

                    </div>
                </Grid>

            </Grid>
        </>
    );
};

export default TopBanner;