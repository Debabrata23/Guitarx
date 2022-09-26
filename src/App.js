import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from '../src/components/Header';
import MainContent from '../src/components/MainContent';
import Footer from './components/Footer';
function App() {
  return (
    <React.Fragment>
      <Header />
      <MainContent />
      <Footer/>
    </React.Fragment>

  );
}

export default App;
