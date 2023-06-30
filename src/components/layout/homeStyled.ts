import styled from 'styled-components';

import { animated } from '@react-spring/web';

import { LinkToExternalStyled } from '@/components/link/linkToStyled';

import { animation, animationMoveDown } from '@/styles/animation';
import { gradientDirection } from '@/styles/function';
import { Span, Title4 } from '@/styles/text';
import { variable } from '@/styles/variable';

export const HomeAnimationText = styled(animated.span)`
  position: absolute;
`;

export const HomeBtnScrollStyled = styled.button`
  ${animation};

  animation-delay: 1s;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-name: ${animationMoveDown()};
  bottom: ${variable.space.spacingMD};
  left: 50%;
  position: absolute;
  transform: translateX(-50%);

  &:hover {
    svg {
      opacity: 0.5;
    }
  }

  svg {
    fill: ${variable.color.turquoiseLight};
    height: 14px;
    transition: opacity ${variable.animation.transition};
  }
`;

export const HomeContactBoxStyled = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  ul {
    li {
      + li {
        margin-top: ${variable.space.spacingSM};
      }

      svg {
        height: 22px;
        margin-right: ${variable.space.spacingXS};
        max-width: 22px;
        vertical-align: sub;
      }
    }
  }
`;

export const HomeFlexStyled = styled.div`
  column-gap: ${variable.space.spacingMD};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: ${variable.breakpoint.md};
  row-gap: ${variable.space.spacingLG};
  width: 100%;
`;

export const HomeProfessionalQualificationBoxStyled = styled.div`
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
        color: ${({ theme }): string => theme.textColor.secondary};
        line-height: 1.2;

        &::first-letter {
          text-transform: capitalize;
        }

        a,
        ${Span} {
          font-size: 12px;
        }

        a {
          color: ${variable.color.turquoise};
        }

        ${Span} {
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

export const HomeProfessionalTrajectoryBoxStyled = styled.div`
  p {
    color: ${({ theme }): string => theme.textColor.secondary};
    font-family: sans-serif;
    font-size: 14px;
    text-align: center;

    @media (min-width: ${variable.breakpoint.md}) {
      font-size: 16px;
    }

    &::first-letter {
      text-transform: capitalize;
    }

    span {
      color: ${variable.color.turquoise};
      font-weight: 700;
    }
  }
`;

export const HomeSkillsBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 170px;

  @media (min-width: ${variable.breakpoint.sm}) {
    min-width: auto;
  }

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
          font-size: 22px;
        }

        p {
          color: ${({ theme }): string => theme.textColor.primary};
          font-size: 14px;
          line-height: 1;
          margin: 0 ${variable.space.spacingXS};

          &::first-letter {
            text-transform: capitalize;
          }

          ${Span} {
            color: ${variable.color.turquoise};
            font-size: 12px;
          }
        }

        @media (min-width: ${variable.breakpoint.md}) {
          code {
            font-size: 26px;
          }

          p {
            font-size: 16px;

            ${Span} {
              font-size: 14px;
            }
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
  width: 100%;

  ${LinkToExternalStyled} {
    &:hover {
      svg {
        opacity: 0.5;
      }
    }

    svg {
      fill: ${variable.color.turquoiseLight};
      height: 28px;
      transition: opacity ${variable.animation.transition};
    }
  }
`;
