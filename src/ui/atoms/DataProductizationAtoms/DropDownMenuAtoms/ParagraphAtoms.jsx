import styled from 'styled-components';

const DropDownMenuLabelOrOptionAtom = styled.p`
  font-weight: ${({ isLabel, isBold }) =>
    (isBold && '700') || (isLabel ? '500' : '400')};

  ${({ isLabel }) => (isLabel ? 'margin-bottom: 8px' : '')};
  font-size: 18px;
  line-height: 21.94px;
  color: ${({ theme }) => theme.colors.lightBlack};
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'auto')};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export { DropDownMenuLabelOrOptionAtom };
