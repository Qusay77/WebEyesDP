import styled from 'styled-components';

const Checkbox = styled.input`
  width: 24px;
  height: 24px;
  -webkit-appearance: none;
  display: inline-block;
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors.borderBlue};
  display: flex;
  justify-content: center;
  border-radius: 5px;
  &:after {
    content: '';
    display: inline-block;
    position: relative;
    width: 9px;
    height: 18px;
    border-bottom: 3px solid #fff;
    border-right: 3px solid #fff;
    transform: rotate(45deg);
  }

  &:checked {
    background: ${({ theme }) => theme.colors.sliderBlue};
    outline: none;
  }
  &:focus,
  &:active {
    outline: none;
  }

  &:hover {
    outline: 2px solid ${({ theme }) => theme.colors.borderBlue};
  }
`;

const TextInput = styled.input`
  color: ${({ theme, optional }) =>
    optional ? theme.colors.optional : theme.colors.lightBlack};
  border: 1px solid
    ${({ theme, error }) => {
      return error ? theme.colors.borderRed : theme.colors.borderBlue;
    }};
  border-radius: 5px;
  &:focus {
    outline: 2px solid
      ${({ theme, error }) => {
        return error ? theme.colors.borderRed : theme.colors.borderBlue;
      }};
  }
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '348px')};
  height: 56px;
  padding: 0 16px;

  ${({ disabled }) =>
    disabled &&
    `
  opacity: 0.5;
  pointer-events:none;
  `}
`;

export { Checkbox, TextInput };
