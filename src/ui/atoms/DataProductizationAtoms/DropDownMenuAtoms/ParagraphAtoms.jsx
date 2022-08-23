import styled from 'styled-components';

const DropDownMenuLabelOrOptionAtom = styled.p`
  font-weight: ${({ isLabel, isBold }) =>
    (isBold && '700') || (isLabel ? '500' : '400')};

  ${({ isLabel }) => (isLabel ? 'margin-bottom: 8px' : '')};
  font-size: 18px;
  line-height: 21.94px;
  color: ${({ theme }) => theme.colors.black};
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'auto')};
`;

export { DropDownMenuLabelOrOptionAtom };
