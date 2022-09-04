import React from 'react';
import {
  Anchor,
  ButtonAtom,
  ButtonTextAtom,
} from '../../../atoms/GlobalAtoms/Buttons/GreenButtonAtoms';

const ActionHeaderButton = ({ action, mobile, anchor }) => {
  return (
    <ButtonAtom
      height={'52px'}
      width={mobile ? '358px' : '220px'}
      onClick={action}
      id="info-section"
    >
      {anchor ? (
        <Anchor href="#info-section">
          <ButtonTextAtom>
            {mobile ? 'Simulate my Lost Revenue' : 'Test my Real Data!'}
          </ButtonTextAtom>
        </Anchor>
      ) : (
        <ButtonTextAtom>
          {mobile ? 'Simulate my Lost Revenue' : 'Test my Real Data!'}
        </ButtonTextAtom>
      )}
    </ButtonAtom>
  );
};

export default ActionHeaderButton;
