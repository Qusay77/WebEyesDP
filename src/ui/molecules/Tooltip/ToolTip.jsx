import React from 'react';
import {
  MenuToolTip,
  ToolTipText,
} from '../../atoms/GlobalAtoms/Tooltip/TooltipAtoms';

const ToolTip = ({ children, text }) => <MenuToolTip>{children}</MenuToolTip>;

export default ToolTip;
