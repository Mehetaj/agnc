import React from 'react';
import Banner from '@/app/Components/About/Banner/Banner';
import AboutHero from '@/app/Components/About/AboutHero/AboutHero';
import Contact from '@/app/Components/Home/Contact/Contact';
import ChooseUs from '@/app/Components/About/ChooseUs/ChooseUs';

const page = () => {
    return (
        <div>
            <Banner />
            <AboutHero />
            <ChooseUs />
            <Contact />
        </div>
    );
};

export default page;