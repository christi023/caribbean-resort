import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { Col } from 'react-bootstrap';
// Component
import Title from '../../Title/Title';
// style
import './RoomsFilter.css';

export default function RoomsFilter(props) {
  const [state, setState] = useState({
    types: [],
    guests: [],
    prices: [],
    sizes: [],
    type: 'all',
    price: 0,
    capacity: 1,
    breakfast: false,
    pets: false,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
  });

  useEffect(() => {
    const getRoomData = (rooms, d_type) => {
      const data = rooms.map((item) => {
        return item[d_type];
      });
      const unique_data = [...new Set(data)];
      return unique_data;
    };
    const types = getRoomData(props.rooms, 'type');

    setState({
      ...state,
      types: types,
    }); //eslint-disable-next-line
  }, [props.rooms]);

  // method
  const handleChange = (e) => {
    if (e.target.type === 'checkbox') {
      setState({ ...state, [e.target.name]: e.target.checked });
    } else {
      setState({ ...state, [e.target.name]: e.target.value });
    }
  };

  return (
    <section className="filter-container">
      <Title title="Search Rooms" />
      <Form className="filter-form">
        <Form.Row>
          <Col md={6} col={12}>
            <Form.Group>
              <Form.Label htmlFor="type">Room Type</Form.Label>
              <Form.Control
                as="select"
                name="type"
                id="type"
                className="form-control"
                onChange={handleChange}
              >
                <option value="all">All Types</option>
                {state.types.map((type, i) => {
                  return (
                    <option key={i} value={type}>
                      {type}
                    </option>
                  );
                })}
              </Form.Control>
            </Form.Group>
          </Col>
        </Form.Row>
      </Form>
    </section>
  );
}
