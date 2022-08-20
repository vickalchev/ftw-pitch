import * as React from 'react';
import './reset.css';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Process from '../components/Process';
import CTA1 from '../components/CTA1';
import Testimonials from '../components/Testimonials';

const IndexPage = () => {
  return (
    <main>
      <NavBar />
      <Header />
      <Process />
      <CTA1 />
      <Testimonials />
      

    </main>
  )
}

export default IndexPage
