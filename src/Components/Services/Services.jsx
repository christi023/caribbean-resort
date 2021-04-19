import React from 'react';
import Title from '../Title/Title';
import services from '../../data/ServicesData';
import { Row, Col } from 'react-bootstrap';
// styles
import './Services.css';

const Services = () => {
  return (
    <>
      <section className="services">
        <div className="container">
          <Title title="Services" />
          <Row>
            {services.map((service, i) => (
              <Col md={4} lg={3} className="col-12 mx-auto my-3" key={i}>
                <div className="card shadow-lg border-0 p4">
                  <article className="service">
                    <span>{service.icon}</span>
                    <h6>{service.title}</h6>
                    <p>{service.info}</p>
                  </article>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </>
  );
};

export default Services;
