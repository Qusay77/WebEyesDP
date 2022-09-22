import styled from 'styled-components';
import ShareBG from './../../../assets/share.svg';
import ShareGreenBG from './../../../assets/shareGreen.svg';
import ShareBlueBG from './../../../assets/shareBlue.svg';

const BlockAtom = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${({ flex }) => flex};
  justify-content: ${({ center, between }) =>
    (between && 'space-between') || (center && 'center')};
  align-items: ${({ center, end, start }) =>
    (end && 'flex-end') || (center && 'center') || (start && 'flex-start')};
`;

const TextAtomsContainer = styled.div`
  height: 100%;
  width: 100%;
  text-align: start;
`;

const ShareBlockContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 78px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderBlue};
`;

const ShareIconBoxWrapper = styled.div`
  width: 112px;
  user-select: none;
  cursor: pointer;
`;

const ShareIconBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ShareIcon = styled.div`
  background-image: ${({ copied }) =>
    copied ? `url(${ShareGreenBG})` : `url(${ShareBG})`};
  width: 14px;
  height: 14px;
  ${({ absolute }) =>
    absolute
      ? `
    width: 20px;
    height: 20px;
    background-image: url(${ShareBlueBG});
    position: absolute;
    top: 26px;
    right: 26px;
    cursor: pointer;
  `
      : ''}
`;

const MobileResultsHeaderContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px;
  padding-inline-end: 72px;
  background: rgba(198, 226, 255, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.borderBlue};
  border-radius: 5px;
`;

export {
  BlockAtom,
  TextAtomsContainer,
  ShareBlockContainer,
  ShareIconBox,
  ShareIcon,
  ShareIconBoxWrapper,
  MobileResultsHeaderContainer,
};
