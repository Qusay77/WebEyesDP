import React from 'react';
import {
  ButtonAtom,
  ButtonTextAtom,
} from '../../../atoms/GlobalAtoms/Buttons/GreenButtonAtoms';

const ActionHeaderButton = ({ action, mobile }) => {
  return (
    <ButtonAtom
      height={'52px'}
      width={mobile ? '358px' : '220px'}
      onClick={action}
    >
      <ButtonTextAtom>
        {mobile ? 'Simulate my Lost Revenue' : 'Test my Real Data!'}
      </ButtonTextAtom>
    </ButtonAtom>
  );
};

export default ActionHeaderButton;
