import styled from 'styled-components';

const ParagraphHeaderAtom = styled.p`
  font-weight: 800;
  font-size: 48px;
  line-height: 58.51px;
  color: ${({ theme }) => theme.colors.black};
`;

const DropDownMenuLabelAtom = styled.p`
  font-weight: ${({ isBolder, isBold }) =>
    (isBold && '700') || (isBolder ? '500' : '400')};
  font-size: 18px;
  line-height: 21.94px;
  color: ${({ theme }) => theme.colors.black};
`;

export { ParagraphHeaderAtom, DropDownMenuLabelAtom };
