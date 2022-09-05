import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import DPMain from './DPMain';

const Main = () => {
  const { count } = useSelector(({ loaderState }) => loaderState);
  useEffect(() => {
    if (count) {
      document.body.style.pointerEvents = 'none';
      document.documentElement.style.cursor = 'wait';
    } else {
      document.body.style.pointerEvents = 'unset';
      document.documentElement.style.cursor = 'unset';
    }
  }, [count]);

  return (
    <>
      <DPMain />
    </>
  );
};

export default Main;
