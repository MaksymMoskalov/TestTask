import {
  StyledCarItem,
  StyledImgWrapper,
  StyledCarImg,
  StyledTitleWrapper,
  StyledShortInfo,
  StyledMoreButton,
} from './CarItem.styled';

export const CarItem = ({ carItemData }) => {
  const {
    img,
    model,
    make,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
    functionalities,
  } = carItemData;
  const addressPart = address.split(',');
  return (
    <StyledCarItem>
      <StyledImgWrapper>
        <StyledCarImg src={img} alt={model} />
      </StyledImgWrapper>
      <StyledTitleWrapper>
        <h2 className="car-title">
          {make} <span className="acsent-color">{model}</span>, {year}
        </h2>
        <p className="car-title"> {rentalPrice}</p>
      </StyledTitleWrapper>
      <StyledShortInfo>{`${addressPart[1].trim()} | ${addressPart[2].trim()} | ${rentalCompany} | ${type} | ${make} | ${mileage} | ${
        functionalities[0]
      }`}</StyledShortInfo>
      <StyledMoreButton type="button">Learn more</StyledMoreButton>
    </StyledCarItem>
  );
};
