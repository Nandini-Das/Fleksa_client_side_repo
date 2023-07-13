import React from 'react';
import BannerSection from './BannerSection';
import Menu from './Menu';
import AboutPage from './About';
import ServicesPage from './Services';
import PopularSection from './PopularSection';

const Home = () => {
    return (
        <div>
           <BannerSection></BannerSection>
           <AboutPage></AboutPage>
           <ServicesPage></ServicesPage>
           <PopularSection></PopularSection>
           <Menu></Menu>
        </div>
    );
};

export default Home;