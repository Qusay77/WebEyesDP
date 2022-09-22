import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setShareCopied } from '../../../../redux/DPSlice';
import {
  ShareIcon,
  ShareIconBox,
  ShareIconBoxWrapper,
} from '../../../atoms/DataProductizationAtoms/ActionHeader/ActionHeaderAtoms';
import { SmallInfoText } from '../../../atoms/DataProductizationAtoms/ProblemsInfoAtoms/ParagraphAtoms';
import ToolTip from '../../../organisms/Global/ToolTip';

const ShareIconBlock = () => {
  const { shareCopied } = useSelector(({ DPState }) => DPState);
  const dispatch = useDispatch();
  const [isHoverOn, setIsHoverOn] = useState(false);
  return (
    <ShareIconBoxWrapper
      onMouseEnter={() => setIsHoverOn(true)}
      onMouseLeave={() => {
        setIsHoverOn(false);
        setTimeout(() => setIsHoverOn(true), 50);
      }}
      onClick={() => dispatch(setShareCopied({ value: true }))}
    >
      <ToolTip
        isHoverOn={isHoverOn}
        text={shareCopied ? 'Link Is Copied' : 'Copy Link'}
        value={shareCopied}
        OFAllow
      >
        <ShareIconBox>
          <ShareIcon copied={shareCopied} />
          <SmallInfoText copied={shareCopied}>Share Report</SmallInfoText>
        </ShareIconBox>
      </ToolTip>
    </ShareIconBoxWrapper>
  );
};

export default ShareIconBlock;
