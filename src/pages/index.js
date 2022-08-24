import * as React from 'react';
import './reset.css';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Process from '../components/Process';
import CTA1 from '../components/CTA1';
import Testimonials from '../components/Testimonials';
import NewsletterCTA from '../components/NewsletterCta';
import Team from '../components/Team';
import Footer from '../components/Footer';

const IndexPage = () => {
  return (
    <main>
      <NavBar />
      <Header />
      <Process />
      <CTA1 />
      <Testimonials />
      <NewsletterCTA />
      <Team />
      <CTA1 />
      <Footer />    

    </main>
  )
}

export default IndexPage
