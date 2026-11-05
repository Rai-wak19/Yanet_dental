import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero.jsx';
import ServicesOverview from '../components/ServicesOverview.jsx';
import Stats from '../components/Stats.jsx';
import Testimonials from '../components/Testimonials.jsx';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Yanet Speciality Dental | Your Smile, Our Specialty</title>
        <meta
          name="description"
          content="Discover Yanet Speciality Dental, a modern boutique clinic offering cosmetic dentistry, orthodontics, dental implants, pediatric dentistry, and advanced teeth whitening."
        />
      </Helmet>
      <main>
        <Hero />
        <ServicesOverview />
        <Stats />
        <Testimonials />
      </main>
    </>
  );
};

export default Home;

