import React from 'react';
import Banner from './Banner';
import StripeMenu from './StripeMenu';
import Categories from './Categories';
import Popular from './Popular';
import Placement from './Placement';
import Testimonial from './testimonial';

const Home = () => {
    return (
        <div className=' pt-24'>
            <Banner/>
            <StripeMenu/>
            <Categories/>
            <Popular/>
            <Placement/>
            <Testimonial/>
        </div>
    );
};

export default Home;