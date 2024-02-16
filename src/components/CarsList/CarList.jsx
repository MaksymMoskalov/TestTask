import { CarItem } from 'components/CarsItem/CarItem';
import { useSelector } from 'react-redux';
import { selectCars } from '../../redux/cars.selectors';

export const CarList = () => {
  const cars = useSelector(selectCars);
  return (
    <ul>
      {cars !== null &&
        cars.map(car => {
          return <CarItem carItemData={car} key={car.id} />;
        })}
    </ul>
  );
};
