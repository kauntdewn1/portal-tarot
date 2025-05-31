import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Reader from './components/Reader';
import Headline from './components/Headline';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { ChatbaseBubble } from './components/ChatbaseBubble';
import WebTalk from './pages/WebTalk';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 font-montserrat">
            <Header />
            <Hero />
            <Reader />
            <Headline />
            <Benefits />
            <FAQ />
            <Footer />
            {location.pathname !== "/webtalk" && <ChatbaseBubble />}
          </div>
        } />
        <Route path="/webtalk" element={<WebTalk />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;