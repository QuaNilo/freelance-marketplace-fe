import React from 'react';
import './App.css';
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import JobsPage from './screens/jobs';
import "@meshsdk/react/styles.css";

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
