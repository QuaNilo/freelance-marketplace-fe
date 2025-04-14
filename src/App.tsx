import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import JobsPage from './screens/jobs';

function App() {
  return (
    <div className="App bg-background">
      <Navbar/>
      <JobsPage/>
      <Footer/>
    </div>
  );
}

export default App;
