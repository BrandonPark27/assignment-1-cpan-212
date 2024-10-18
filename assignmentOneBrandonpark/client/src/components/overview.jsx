import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';

const Overview = () => {
  const [overview, setOverview] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/getOverview')
      .then(response => setOverview(response.data))
      .catch(error => console.error('Error fetching overview:', error));
  }, []);

  return (
    <Container className="section">
      <h2>Overview</h2>
      <p>{overview}</p>
    </Container>
  );
};

export default Overview;
