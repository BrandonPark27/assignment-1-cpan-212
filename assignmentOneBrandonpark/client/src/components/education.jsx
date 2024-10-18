import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';

const Education = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/getEdu')
      .then(response => setEducation(response.data))
      .catch(error => console.error('Error fetching education:', error));
  }, []);

  return (
    <Container className="section">
      <h2>Education</h2>
      {education.map((edu, index) => (
        <div key={index}>
          <h4>{edu.degree}</h4>
          <p>{edu.institution}</p>
        </div>
      ))}
    </Container>
  );
};

export default Education;
