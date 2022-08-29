import styled from 'styled-components';

const HeaderText = styled.p`
  font-weight: 800;
  font-size: 48px;
  line-height: 58.51px;
  color: ${({ theme }) => theme.colors.black};
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
`;

const OptionalLabelContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 6px;
`;

const CloseSymbol = styled.p`
  color: ${({ theme }) => theme.colors.closeButtonGrey};
  font-size: 18px;
  cursor: pointer;
  margin-inline-start: ${({ headerSpacing }) => headerSpacing ?? '124px'};
`;

export { MainText, HeaderText, CloseSymbol, OptionalLabelContainer };
