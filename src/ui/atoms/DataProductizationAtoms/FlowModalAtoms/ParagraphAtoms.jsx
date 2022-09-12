import styled from 'styled-components';

const HeaderText = styled.p`
  font-weight: 800;
  font-size: 48px;
  line-height: 58.51px;
  color: ${({ theme }) => theme.colors.black};
  ${({ soloCheck, isCustomPositioned }) =>
    soloCheck
      ? `
  margin-top: ${isCustomPositioned ? '300px' : '410px'};
  `
      : ''}
  margin-inline-end: ${({ headerSpacing }) => headerSpacing ?? '124px'};

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.magicMachine}) {
    height: fit-content;
    font-weight: 800;
    font-size: 30px;
    line-height: 37px;
    margin-inline-end: ${({ headerSpacing }) => headerSpacing ?? '70px'};
  }
`;

const MainText = styled.p`
  font-weight: ${({ isLabel, isBold }) =>
    (isBold && '700') || (isLabel ? '500' : '400')};
  ${({ isLabel }) => (isLabel ? 'margin-bottom: 16px' : '')};
  font-size: 18px;
  line-height: ${({ isLabel }) => (isLabel ? '21.94px' : '29.59px')};
  color: ${({ theme, optional }) =>
    optional ? theme.colors.optional : theme.colors.lightBlack};
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'auto')};
  overflow: hidden;
  user-select: none;
  display: inline;
  ${({ disabled }) =>
    disabled &&
    `
  opacity: 0.5;
  pointer-events:none;
  `}
`;

const OptionalLabelContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 6px;
  margin-top: ${({ marginTop }) => marginTop ?? '0'};
`;

const CloseSymbol = styled.p`
  color: ${({ theme }) => theme.colors.closeButtonGrey};
  font-size: 18px;
  position: fixed;
  top: 56px;
  right: 56px;
  cursor: pointer;
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.magicMachine}) {
    top: 66px;
    right: 16px;
  }
`;

const BottomText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.lightBlack};
  margin-top: 8px;
  max-width: 730px;
`;

export {
  MainText,
  HeaderText,
  CloseSymbol,
  OptionalLabelContainer,
  BottomText,
};
