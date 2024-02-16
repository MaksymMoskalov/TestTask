import styled from 'styled-components';

export const StyledCarItem = styled.li`
  width: 274px;
  height: 426px;
  border-radius: 14px;

  font-family: Manrope;
`;

export const StyledImgWrapper = styled.div`
  width: 274px;
  height: 268px;
  margin-bottom: 14px;

  border-radius: 14px;
  overflow: hidden;
`;

export const StyledCarImg = styled.img`
  width: 274px;
  height: 268px;
  object-fit: cover;
`;

export const StyledTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;

  .car-title {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }

  .acsent-color {
    color: #3470ff;
  }
`;

export const StyledShortInfo = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #12141780;
  margin-bottom: 28px;
`;

export const StyledMoreButton = styled.button`
  width: 274px;
  height: 44px;
  background-color: #3470ff;
  color: #fff;

  border-radius: 12px;
  border-color: transparent;

  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`;
