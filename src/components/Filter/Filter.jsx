import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { selectBrandFilter } from '../../redux/cars.selectors';
import { handlBrandFilter } from '../../redux/autosReduser';

const options = [
  { value: '', label: 'All' },
  { value: 'Buick', label: 'Buick' },
  { value: 'Volvo', label: 'Volvo' },
  { value: 'Subaru', label: 'Subaru' },
  { value: 'Mitsubishi', label: 'Mitsubishi' },
  { value: 'Nissan', label: 'Nissan' },
  { value: 'Lincoln', label: 'Lincoln' },
  { value: 'GMC', label: 'GMC' },
  { value: 'Hyundai', label: 'Hyundai' },
  { value: 'MINI', label: 'MINI' },
  { value: 'Bentley', label: 'Bentley' },
  { value: 'Mercedes-Benz', label: 'Mercedes-Benz' },
  { value: 'Aston Martin', label: 'Aston Martin' },
  { value: 'Pontiac', label: 'Pontiac' },
  { value: 'Lamborghini', label: 'Lamborghini' },
  { value: 'Audi', label: 'Audi' },
  { value: 'BMW', label: 'BMW' },
  { value: 'Chevrolet', label: 'Chevrolet' },
  { value: 'Chrysler', label: 'Chrysler' },
  { value: 'Kia', label: 'Kia' },
  { value: 'Land', label: 'Land Rover' },
];

export const Filter = () => {
  const brandFilter = useSelector(selectBrandFilter);
  const dispatch = useDispatch();

  const handleChange = selected => {
    dispatch(handlBrandFilter(selected));
  };

  return (
    <form>
      <label>
        <span>Car brand</span>
        <Select value={brandFilter} onChange={handleChange} options={options} />
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
