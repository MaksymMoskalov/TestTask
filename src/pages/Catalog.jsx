import { CarList } from 'components/CarsList/CarList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { allCarsThunk, loadMoreCarsThunk } from '../redux/autosOperations';
import {
  selectIsLoading,
  selectFact,
  selectTotal,
  selectPage,
  selectCars,
  selectBrandFilter,
} from '../redux/cars.selectors';
import { Blocks } from 'react-loader-spinner';
import { Filter } from 'components/Filter/Filter';
import { CarModal } from 'components/Modal/Modal';
import { handlModalClose } from '../redux/autosReduser';

const Catalog = () => {
  const disputch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const fact = useSelector(selectFact);
  const total = useSelector(selectTotal);
  const page = useSelector(selectPage);
  const cars = useSelector(selectCars);
  const brandFilter = useSelector(selectBrandFilter);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    disputch(allCarsThunk());
  }, [disputch]);

  const onLoadMore = () => {
    disputch(loadMoreCarsThunk(page));
  };

  const toglModal = () => {
    setOpenModal(!openModal);
    disputch(handlModalClose(null));
  };

  const filteredCars = () => {
    return cars.filter(car => {
      return car.make.includes(brandFilter);
    });
  };
  const carsByBrand = filteredCars();
  return (
    <>
      <section>
        <Filter />
        <CarList openModal={toglModal} cars={carsByBrand} />
        {fact < total ? (
          <button type="button" onClick={onLoadMore}>
            Load more
          </button>
        ) : (
          <p>You have reviewed all the cars</p>
        )}

        {isLoading && (
          <Blocks
            height="150"
            width="150"
            color="#4fa94d"
            wrapperClass="blocks-wrapper"
          />
        )}
      </section>
      {openModal && <CarModal closeModal={toglModal} />}
    </>
  );
};

export default Catalog;
