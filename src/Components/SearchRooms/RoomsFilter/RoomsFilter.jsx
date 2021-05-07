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
    const guests = getRoomData(props.rooms, 'capacity');
    const prices = getRoomData(props.rooms, 'price');
    const sizes = getRoomData(props.rooms, 'size');
    const minPrice = prices.length > 0 ? Math.min(...prices) : 0;
    const maxPrice = prices.length > 0 ? Math.max(...prices) : 0;
    const minSize = sizes.length > 0 ? Math.min(...sizes) : 0;
    const maxSize = sizes.length > 0 ? Math.max(...sizes) : 0;

    setState({
      ...state,
      types: types,
      guests: guests,
      minPrice: minPrice,
      maxPrice: maxPrice,
      minSize: minSize,
      maxSize: maxSize,
      price: maxPrice,
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
    <section className="container mt-5">
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

            <Form.Group>
              <Form.Label htmlFor="capacity">Guests</Form.Label>
              <Form.Control
                as="select"
                name="capacity"
                id="capacity"
                className="form-control"
                onChange={handleChange}
              >
                {state.guests.sort().map((guest, i) => {
                  return (
                    <option key={i} value={guest}>
                      {guest}
                    </option>
                  );
                })}
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="price">room price ${state.price}</Form.Label>
              <Form.Control
                type="range"
                name="price"
                id="price"
                min={state.minPrice}
                max={state.maxPrice}
                className="form-control"
                value={state.price}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
          </Col>

          <Col md={4} col={12} className="ml-auto">
            <Form.Check></Form.Check>
          </Col>
        </Form.Row>
      </Form>
    </section>
  );
}
