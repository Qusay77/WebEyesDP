import React from 'react';
import { useSelector } from 'react-redux';
import {
  Anchor,
  ButtonAtom,
  ButtonTextAtom,
} from '../../../atoms/GlobalAtoms/Buttons/GreenButtonAtoms';

const ActionHeaderButton = ({ action, mobile, anchor }) => {
  const { isPDF } = useSelector(({ loaderState }) => loaderState);
  return (
    <ButtonAtom
      height={'52px'}
      width={mobile ? '358px' : '220px'}
      onClick={action}
      id="info-section"
    >
      {anchor || isPDF === 10 ? (
        <Anchor
          href={
            isPDF === 10
              ? 'https://www.webeyez.com/lost-revenue-simulator'
              : '#info-section'
          }
        >
          <ButtonTextAtom>
            {mobile ? 'Simulate my Lost Revenue' : 'Test your Site!'}
          </ButtonTextAtom>
        </Anchor>
      ) : (
        <ButtonTextAtom>
          {mobile ? 'Simulate my Lost Revenue' : 'Test your Site!'}
        </ButtonTextAtom>
      )}
    </ButtonAtom>
  );
};

export default ActionHeaderButton;
