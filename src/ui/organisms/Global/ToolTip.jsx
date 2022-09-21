import React, { useRef, useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { isOverflown } from '../../../utils/tools';

const ToolTip = ({ text, value, isHoverOn, children }) => {
  const [isOver, setIsOver] = useState(false);
  const tipRef = useRef(null);
  // eslint-disable-next-line react/display-name
  const ElementChild = (props) => {
    return React.cloneElement(children, {
      ...props,
      ref: tipRef,
    });
  };
  useEffect(() => {
    if (tipRef) {
      if (isOverflown(tipRef.current)) {
        setIsOver(true);
      }
    }
  }, [tipRef]);

  return (
    <>
      <ElementChild data-tip data-for={`tip-${value}`} />
      {isHoverOn && isOver && (
        <ReactTooltip
          className={'react-tooltip'}
          wrapper="div"
          id={`tip-${value}`}
        >
          <div>{text}</div>
        </ReactTooltip>
      )}
    </>
  );
};

export default ToolTip;
