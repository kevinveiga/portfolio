import styled from 'styled-components';

import { gradientDirection } from '@/styles/function';
import { variable } from '@/styles/variable';

export const HomeTopStyled = styled.section`
  ${gradientDirection({ colorStart: variable.color.blueDark, colorEnd: variable.color.turquoiseLight, deg: '50deg' })};

  display: flex;
  flex-direction: column;
  height: auto;
  padding-bottom: ${variable.space.spacingMD};
  padding-left: ${variable.space.spacingSM};
  padding-right: ${variable.space.spacingSM};
  padding-top: ${variable.space.spacingXXL};
  width: 100%;

  @media (min-width: ${variable.breakpoint.sm}) {
    padding-bottom: ${variable.space.spacingXXL};
    padding-left: ${variable.space.spacingLG};
    padding-right: ${variable.space.spacingLG};
    padding-top: 100px;
  }

  svg {
    fill: ${variable.color.turquoiseLight};
    height: 28px;
  }
`;
