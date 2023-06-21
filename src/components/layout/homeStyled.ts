import styled from 'styled-components';

import { gradientDirection } from '@/styles/function';
import { variable } from '@/styles/variable';

export const HomeResumeStyled = styled.section`
  width: 60%;

  p {
    color: ${({ theme }): string => theme.textColor.secondary};
    font-weight: 700;
    text-align: center;

    span {
      color: ${variable.color.turquoise};
    }
  }
`;

export const HomeTopStyled = styled.section`
  ${gradientDirection({ colorStart: variable.color.blueDark, colorEnd: variable.color.turquoiseLight, deg: '50deg' })};

  color: ${variable.color.white};
  display: flex;
  flex-direction: column;
  height: auto;
  padding: ${variable.space.spacingLG} ${variable.space.spacingSM};
  width: 100%;

  @media (min-width: ${variable.breakpoint.sm}) {
    padding: ${variable.space.spacingXXXL} ${variable.space.spacingLG};
  }

  svg {
    fill: ${variable.color.turquoiseLight};
    height: 28px;
  }
`;
