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
          
           <Menu></Menu>
           <AboutPage></AboutPage>
           <ServicesPage></ServicesPage>
           <PopularSection></PopularSection>
        </div>
    );
};

export default Home;