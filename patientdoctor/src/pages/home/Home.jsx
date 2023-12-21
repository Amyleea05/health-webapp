import React from 'react'
import Hero from '../../components/hero/Hero';
import Services from '../../components/services/Services';
import Statistics from '../../components/statistics/Statistics';
import "./home.scss";

function Home() {
  return (
    <div className='home'>
        <Hero/>
        <Statistics />
        <Services />
    </div>
  )
}

export default Home;