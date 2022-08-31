import styled from 'styled-components';

const RangeInputContainer = styled.div`
  width: 100%;
`;

const RangeInput = styled.input`
  width: 356px;
  outline: none;
  -webkit-appearance: none;

  &::-webkit-slider-progress {
    background-color: ${({ theme }) => theme.colors.sliderBlue};
    height: 8px;
    border-radius: 27px;
  }

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    background: ${({ gradientValue, theme }) => `linear-gradient(
      to right,
      ${theme.colors.sliderBlue} 0%,
      ${theme.colors.sliderBlue} ${gradientValue}%,
      rgba(75, 157, 247, 0.1) ${gradientValue}%,
      rgba(75, 157, 247, 0.1) 100%
    )`};
    content: '';
    height: 8px;
    border-radius: 27px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 1px solid ${({ theme }) => theme.colors.borderBlue};
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #ffffff;
    margin-top: -6px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    cursor: -webkit-grab;
    cursor: -moz-grab;
  }

  &::-moz-range-thumb {
    background: #ffffff;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    border: 1px solid ${({ theme }) => theme.colors.borderBlue};
    cursor: -webkit-grab;
    cursor: -moz-grab;
  }

  &::-moz-range-progress {
    background-color: ${({ theme }) => theme.colors.sliderBlue};
    height: 8px;
    border-radius: 27px;
  }

  &::-moz-range-track {
    background-color: rgba(75, 157, 247, 0.1);
    height: 8px;
    border-radius: 27px;
  }
`;

export { RangeInputContainer, RangeInput };
