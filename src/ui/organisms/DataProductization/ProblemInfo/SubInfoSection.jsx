import React from 'react';
import { BlockContainer } from '../../../atoms/DataProductizationAtoms/ProblemsInfoAtoms/InfoContainerLayout';
import { VariableFlexLayout } from '../../../atoms/GlobalAtoms/LayoutAtoms/LayoutAtoms';
import SubInfoHeaderText from '../../../molecules/DataProductization/ProblemInfo/SubInfoHeaderText';
import SubInfoText from '../../../molecules/DataProductization/ProblemInfo/SubInfoTextRow';
import styled from 'styled-components';

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
  }
`;

const SubInfoSection = ({ section, color, currency }) => {
  const { problems } = section;
  return (
    <BlocksLayout
      wrap={'wrap'}
      dir={'column'}
      height={'282px'}
      padding={'0 24px'}
    >
      {problems.map((problem, i) => (
        <BlockContainer key={`block-${i}`}>
          <SubInfoHeaderText
            color={color}
            currency={currency}
            problem={problem}
          />
          {problem.subCategories.map((category, i) => (
            <SubInfoText
              category={category}
              currency={currency}
              key={`cat-${i}`}
            />
          ))}
        </BlockContainer>
      ))}
    </BlocksLayout>
  );
};

export default SubInfoSection;
