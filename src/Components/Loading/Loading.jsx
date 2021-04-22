import React from 'react';
import loading from '../../images/gif/loading-arrow.gif';

export default function Loading() {
  return (
    <div className="loading">
      <h4>Rooms data loading...</h4>
      <img src={loading} alt="Loading Please Wait" />
    </div>
  );
}
