export const CarItem = ({ carItemData }) => {
  return (
    <li>
      <img src={carItemData.img} alt={carItemData.model} />
      <h2>
        {carItemData.make} {carItemData.model}, {carItemData.year}
      </h2>
      <p> {carItemData.rentalPrice}</p>
      <p></p>
      <button type="button">Learn more</button>
    </li>
  );
};
