import React from 'react';
import Overview from './components/overview';
import Education from './components/education';
import Experience from './components/experience';
import { Container } from 'react-bootstrap';
import './App.css';


const App = () => {
  return (
    <Container>
      <Overview />
      <Education />
      <Experience />
    </Container>
  );
};

export default App;