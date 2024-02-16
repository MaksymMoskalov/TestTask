import React from 'react';
import { CarList } from 'components/CarsList/CarList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { allCarsThunk, loadMoreCarsThunk } from '../redux/autosOperations';
import {
  selectIsLoading,
  selectFact,
  selectTotal,
  selectPage,
} from '../redux/cars.selectors';
import { Blocks } from 'react-loader-spinner';
import { Filter } from 'components/Filter/Filter';

const Catalog = () => {
  const disputch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const fact = useSelector(selectFact);
  const total = useSelector(selectTotal);
  const page = useSelector(selectPage);

  useEffect(() => {
    disputch(allCarsThunk());
  }, [disputch]);

  const onLoadMore = () => {
    disputch(loadMoreCarsThunk(page));
  };

  return (
    <section>
      <Filter />
      <CarList />
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
  );
};

export default Catalog;
