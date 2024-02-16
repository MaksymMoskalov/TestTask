import { CarItem } from 'components/CarsItem/CarItem';
import { useSelector } from 'react-redux';
import { selectCars } from '../../redux/cars.selectors';
import { StyledCarList } from './CarList.styled';

export const CarList = () => {
  const cars = useSelector(selectCars);
  return (
    <StyledCarList>
      {cars !== null &&
        cars.map(car => {
          return <CarItem carItemData={car} key={car.id} />;
        })}
    </StyledCarList>
  );
};
