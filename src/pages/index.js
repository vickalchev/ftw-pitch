import * as React from 'react';
import './reset.css';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Process from '../components/Process';
import CTA1 from '../components/CTA1';

const IndexPage = () => {
  return (
    <main>
      <NavBar />
      <Header />
      <Process />
      <CTA1 />

    </main>
  )
}

export default IndexPage
