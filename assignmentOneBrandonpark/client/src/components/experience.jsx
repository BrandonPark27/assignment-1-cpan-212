import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';

const Experience = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/getExp')
      .then(response => setExperience(response.data))
      .catch(error => console.error('Error fetching experience:', error));
  }, []);

  return (
    <Container className="section">
      <h2>Experience</h2>
      {experience.map((exp, index) => (
        <div key={index}>
          <h4>{exp.role}</h4>
          <p>{exp.company}</p>
        </div>
      ))}
    </Container>
  );
};

export default Experience;
