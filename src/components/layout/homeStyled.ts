import styled from 'styled-components';

import { gradientDirection } from '@/styles/function';
import { Title4 } from '@/styles/text';
import { variable } from '@/styles/variable';

export const HomeResumeStyled = styled.div`
  p {
    color: ${({ theme }): string => theme.textColor.secondary};
    font-family: sans-serif;
    font-size: 18px;
    text-align: center;

    span {
      color: ${variable.color.turquoise};
      font-weight: 700;
    }
  }
`;

export const HomeFlexStyled = styled.div`
  column-gap: ${variable.space.spacingMD};
  display: flex;
  justify-content: space-around;
  max-width: ${variable.breakpoint.md};
  row-gap: ${variable.space.spacingMD};
  width: 100%;
`;

export const HomeFormationBoxStyled = styled.div`
  background-color: ${({ theme }): string => theme.bgColor.secondary};
  border: 1px solid ${({ theme }): string => theme.borderColor.secondary};
  border-radius: ${variable.layout.borderRadiusPrimary};
  display: flex;
  flex-direction: column;
  max-width: ${variable.breakpoint.xs};
  padding: ${variable.space.spacingMD};
  width: 100%;

  ${Title4} {
    color: ${variable.color.turquoise};
    font-weight: 700;
  }

  ul {
    li {
      + li {
        margin-top: ${variable.space.spacingSM};
      }

      p {
        color: ${({ theme }): string => theme.textColor.tertiary};
        line-height: 1.2;

        a,
        span {
          font-size: 12px;
        }

        a {
          color: ${variable.color.turquoise};
        }

        span {
          color: ${variable.color.pink};
        }

        svg {
          fill: ${variable.color.turquoise};
          margin-left: ${variable.space.spacingXS};
        }
      }
    }
  }
`;

export const HomeSkillsBoxStyled = styled.div`
  display: flex;
  flex-direction: column;

  ${Title4} {
    color: ${variable.color.pink};
    font-weight: 700;
  }

  ul {
    margin-top: ${variable.space.spacingSM};

    li {
      + li {
        margin-top: ${variable.space.spacingSM};
      }

      div {
        display: inline-block;
        vertical-align: middle;

        code {
          color: ${({ theme }): string => theme.textColor.tertiary};
          font-size: 26px;
        }

        p {
          color: ${({ theme }): string => theme.textColor.primary};
          line-height: 1;
          margin: 0 ${variable.space.spacingXS};

          span {
            color: ${variable.color.turquoise};
            font-size: 14px;
          }
        }
      }
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
