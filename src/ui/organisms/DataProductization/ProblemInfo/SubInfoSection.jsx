import React from 'react';
import { BlockContainer } from '../../../atoms/DataProductizationAtoms/ProblemsInfoAtoms/InfoContainerLayout';
import { VariableFlexLayout } from '../../../atoms/GlobalAtoms/LayoutAtoms/LayoutAtoms';
import SubInfoHeaderText from '../../../molecules/DataProductization/ProblemInfo/SubInfoHeaderText';
import SubInfoText from '../../../molecules/DataProductization/ProblemInfo/SubInfoTextRow';
import styled from 'styled-components';
import theme from '../../../theme';
import { useMediaQuery } from 'react-responsive';

const BlocksLayout = styled(VariableFlexLayout)`
  width: 100%;
  > ${BlockContainer} {
    height: 125px;

    &:nth-child(odd) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.borderBlue};
      margin-bottom: 16px;
      padding-bottom: 16px;
      height: fit-content;
    }

    @media screen and (max-width: ${({ theme }) =>
        theme.breakpoints.magicMachine}) {
      height: fit-content;
      width: 100%;
      &:nth-child(odd) {
        border-bottom: unset;
        margin-bottom: unset;
        padding-bottom: unset;
      }
      &:not(:last-child) {
        border-bottom: 1px solid ${({ theme }) => theme.colors.borderBlue};
        margin-bottom: 16px;
        padding-bottom: 16px;
        height: fit-content;
      }
    }
  }
`;

const SubInfoSection = ({ section, color }) => {
  const { problems } = section;
  const isMobile = useMediaQuery({
    query: `(max-width: ${theme.breakpoints.magicMachine})`,
  });
  return (
    <BlocksLayout
      wrap={'wrap'}
      dir={'column'}
      height={isMobile ? 'fit-content' : '284px'}
      padding={isMobile ? '0' : '0 24px'}
    >
      {problems.map((problem, i) => (
        <BlockContainer key={`block-${i}`}>
          <SubInfoHeaderText color={color} problem={problem} />
          {problem.subCategories.map((category, i) => (
            <SubInfoText category={category} key={`cat-${i}`} />
          ))}
        </BlockContainer>
      ))}
    </BlocksLayout>
  );
};

export default SubInfoSection;
