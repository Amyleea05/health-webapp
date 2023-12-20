import React from 'react'
import Hero from '../../components/hero/Hero';
import Statistics from '../../components/statistics/Statistics';
import "./home.scss";

function Home() {
  return (
    <div className='home'>
        <Hero/>
        <Statistics />
    </div>
  )
}

export default Home;