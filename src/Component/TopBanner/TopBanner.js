import React from 'react';
import { Swiper, SwiperSlide, navigation } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
// swiper core styles
import 'swiper/swiper.min.css';
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper';


// modules styles
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

const TopBanner = () => {
    SwiperCore.use([Autoplay, Pagination, Navigation]);

    return (
        < >
            <Swiper style={{ marginTop: 10 }} spaceBetween={10} centeredSlides={true} autoplay={{
                "delay": 2000,
                "disableOnInteraction": false
            }} pagination={{
                "clickable": true
            }} navigation={true} className="mySwiper">
                <SwiperSlide><img src="https://i.ibb.co/bNn4TTM/b1.png" style={{ width: '100%' }} /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/DgRg3cT/b2.png" style={{ width: '100%' }} /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/BVCLzK1/b3.png" style={{ width: '100%' }} /></SwiperSlide>


            </Swiper>
        </>
    );
};

export default TopBanner;