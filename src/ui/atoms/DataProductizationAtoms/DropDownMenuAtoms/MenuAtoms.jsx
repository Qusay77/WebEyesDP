import styled from 'styled-components';

const Arrow = styled.i`
  border: solid ${({ theme }) => theme.colors.sliderBlue};
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(-135deg)' : 'rotate(45deg)')};
`;

const DropDownLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  cursor: pointer;
`;
const DropMenuWrapper = styled.div`
  position: relative;
  z-index: 1;
  user-select: none;
`;
const DropDownMenuContainer = styled.div`
  box-sizing: border-box;
  width: ${({ menuWidth }) => menuWidth};
  height: ${({ isOpen }) => (isOpen ? 'fit-content' : '56px')};
  min-height: 56px;
  overflow: hidden;
  max-height: 489px;
  background: #ffffff;

  border: 1px solid ${({ theme }) => theme.colors.borderBlue};
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 0 16px;

  position: absolute;
  z-index: 9999;

  ${Arrow} {
    transform: ${({ isOpen }) =>
      isOpen ? 'rotate(-135deg)' : 'rotate(45deg)'};
  }
  ${DropDownLabelContainer} {
    ${({ isOpen, theme }) =>
      isOpen
        ? `border-bottom: 1px solid ${theme.colors.borderBlue};height:57px;`
        : ''}
  }

  ${({ disabled }) =>
    disabled &&
    `
  opacity:0.5;
  pointer-events:none;
  `}

  @media screen and (max-width: ${({ theme }) =>
    theme.breakpoints.magicMachine}) {
    width: 100%;
  }
`;
const TextWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ width }) => `width:${width}`};
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'auto')};
`;
const DropDownOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  max-height: 432px;
  padding-inline-end: 10px;
  padding-bottom: 16px;
  overflow-y: scroll;
  ${TextWrap} {
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
  DropMenuWrapper,
  TextWrap,
};
