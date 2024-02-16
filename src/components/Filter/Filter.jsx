import React from 'react';

export const Filter = () => {
  return (
    <form>
      <label>
        <span>Car brand</span>
        <input type="text" />
      </label>
      <label>
        <span>Price/ 1 hour</span>
        <input type="text" />
      </label>
      <label>
        <span>Сar mileage / km</span>
        <input type="text" />
      </label>
      <label>
        <input type="text" />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};
