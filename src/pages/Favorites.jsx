import { CarList } from 'components/CarsList/CarList';
import { selectFavouriteCars } from '../redux/cars.selectors';
import { useDispatch, useSelector } from 'react-redux';
import { handlModalClose } from '../redux/autosReduser';
import { useState } from 'react';
import { CarModal } from 'components/Modal/Modal';

const Favorites = () => {
  const disputch = useDispatch();
  const favouriteCars = useSelector(selectFavouriteCars);
  const [openModal, setOpenModal] = useState(false);

  const toglModal = () => {
    setOpenModal(!openModal);
    disputch(handlModalClose(null));
  };

  return (
    <>
      <section>
        <CarList openModal={toglModal} cars={favouriteCars} />
      </section>
      {openModal && <CarModal closeModal={toglModal} />}
    </>
  );
};

export default Favorites;
