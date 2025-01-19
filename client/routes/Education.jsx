import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../src/Education.css'
import azii from '../public/azii.png'
import polito from '../public/polito.png'

const Education = () => {
  const educationData = [
    {
      degree: 'Master of Software Engineering',
      institution: 'Politecnico di Torino',
      years: '2023 - ',
      logo: polito, 
    },
    {
      degree: 'Bachelor of Electroonics, telecommunication and radiotech',
      institution: 'Azerbaijan State Oil and Industry University',
      years: '2019 - 2023',
      logo: azii, 
    },
  ];

  return (
    <div className="education-section">
      <Container className="education-content">
        <h1 className="text-center mb-5">Education</h1>
        <Row>
          {educationData.map((edu, index) => (
            <Col xs={12} md={6} lg={4} key={index} className="mb-4">
              <Card className="education-card h-100">
                <Card.Img
                  variant="top"
                  src={edu.logo}
                  alt={`${edu.institution} Logo`}
                  className="education-logo p-4"
                />
                <Card.Body>
                  <Card.Title>{edu.degree}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {edu.institution}
                  </Card.Subtitle>
                  <Card.Text className="years">{edu.years}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Education;
