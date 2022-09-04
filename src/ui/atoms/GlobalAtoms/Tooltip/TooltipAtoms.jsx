import styled from 'styled-components';

const ToolTipText = styled('span')({
  visibility: 'hidden',
  width: '120px',
  backgroundColor: '#000',
  color: '#fff',
  textAlign: 'center',
  borderRadius: '6px',
  padding: '5px 0',
  position: 'absolute',
  zIndex: 1,
  bottom: '150%',
  left: '50%',
  marginLeft: '-60px',
  ':after': {
    content: '""',
    position: 'absolute',
    top: '100%',
    left: '50%',
    marginLeft: '-5px',
    borderWidth: '5px',
    borderStyle: 'solid',
    borderColor: 'black transparent transparent transparent',
  },
});

const MenuToolTip = styled('div')({
  position: 'relative',
  display: 'inline-block',
  ':hover span': {
    visibility: 'visible',
  },
});

export { MenuToolTip, ToolTipText };
