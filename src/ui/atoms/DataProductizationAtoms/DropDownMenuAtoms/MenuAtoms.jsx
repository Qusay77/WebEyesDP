import styled from 'styled-components';
import { DropDownMenuLabelOrOptionAtom } from './ParagraphAtoms';

const Arrow = styled.i`
  border: solid #4b9df7;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
`;

const DropDownLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
`;
const DropDownMenuContainer = styled.div`
  box-sizing: border-box;
  width: 254px;
  height: ${({ isOpen }) => (isOpen ? 'fit-content' : '56px')};
  min-height: 56px;
  overflow: hidden;
  max-height: 489px;
  background: #ffffff;
  border: 1px solid #c6e2ff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 0 16px;
  ${Arrow} {
    transform: ${({ isOpen }) =>
      isOpen ? 'rotate(-135deg)' : 'rotate(45deg)'};
  }
  ${DropDownLabelContainer} {
    ${({ isOpen }) => (isOpen ? 'border-bottom: 1px solid #c6e2ff;' : '')}
  }
`;

const DropDownOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  max-height: 432px;
  padding-bottom: 16px;
  overflow: scroll;
  ${DropDownMenuLabelOrOptionAtom} {
    margin-top: 16px;
  }
`;

const ArrowContainer = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  cursor: pointer;
`;

export {
  DropDownMenuContainer,
  DropDownLabelContainer,
  ArrowContainer,
  Arrow,
  DropDownOptionsContainer,
};
