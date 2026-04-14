/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <main className="relative bg-bg text-text min-h-screen overflow-x-hidden">
      <CustomCursor />
      <div className="cinematic-grain pointer-events-none fixed inset-0 z-50 opacity-[0.03]" />
      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
