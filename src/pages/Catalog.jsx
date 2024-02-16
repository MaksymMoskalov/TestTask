import React from 'react';
// import { useState } from 'react-router-dom';
// import { Blocks } from 'react-loader-spinner';
import { CarList } from 'components/CarsList/CarList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { allCarsThunk } from '../redux/autosOperations';
import { selectCars } from '../redux/cars.selectors';

const Catalog = () => {
  const disputch = useDispatch();
  const cars = useSelector(selectCars);

  useEffect(() => {
    disputch(allCarsThunk());
  }, [disputch]);

  return (
    <section>
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
      <CarList />
    </section>
  );
};

export default Catalog;
