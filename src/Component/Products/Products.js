import { Container, Grid } from '@mui/material';
import React, { useEffect, useState, } from 'react';
import Product from './Product';
const actioncamera = [{
    aname: 'GoPro HERO10 Black',
    id: 1,
    price: 450,
    img: 'https://i.ibb.co/LnW0ZFd/go-Pro-Hero10-1.jpg',
    description: 'Revolutionary Processor: Faster. Smoother. Better. The powerful new GP2 engine changes the gameâ€”snappy performance, responsive touch controls and double the frame rate for amazingly smooth footage. Designed specifically for the demanding nature of the GoPro, the GP2 â€œsystem on a chipâ€ is by far our fastest ever.High- Res Photos plus Videos, High Frame Rate: Step up to the sharpest - shooting GoPro ever.Upgraded to incredible 23MP photos and 5.3K video resolution at 60fps, HERO10 offers double the frame rate for amazingly smooth motion.Plus, thereâ€™s 8x slo - mo at 2.7K and you can pause videos and grab 15.8MP still photos from 5.3K video that look amazing.',
    rating: 4.0,
},

{
    aname: 'DJI Osmo Action - 4K',
    id: 2,
    price: 300,
    img: 'https://i.ibb.co/V06tVfH/djiosmoaction-2.jpg',
    description: 'Dual Screens: Osmo Actionâ€™s dual screens allow you to capture it all with the touch of a button. A vivid front screen lets you frame yourself effortlessly in any setting, while the back screen delivers a crystal-clear, hyper-responsive display. This durable, versatile action camera is jam-packed with advanced technology that lets you spend less time worrying about equipment and more time living the action.The RockSteady technology combines EIS with complex algorithms, delivering stable, shake-free footage no matter how heavy the action gets.',
    rating: 4.7,
},
{
    aname: 'GoPro HERO8 Black ',
    id: 3,
    price: 310,
    img: 'https://i.ibb.co/Bsxy3RX/go-Prohero08-3.jpg',
    description: 'HyperSmooth 2.0: HERO8 Black has three levels of stabilization: On, High and Boost. Get the widest views, or boost to the smoothest video ever offered in a HERO camera. Works with all resolutions and frame rates, and features in-app horizon levelingStreamlined Design: The re-imagined shape is more pocketable, and folding fingers at the base let you swap mounts quickly. A new side door makes changing batteries even faster, and the lens is now 2x more impact-resistant compared to previous models',
    rating: 4.5,
},

];


const Products = () => {
    const [cproducts, setCproducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setCproducts(data));
    }, [])
    console.log(cproducts);
    return (
        <div>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    {cproducts.slice(0, 3).map(camera => <Product camera={camera} key={camera.id}></Product>)}
                </Grid>
            </Container>

        </div>
    );
};

export default Products;