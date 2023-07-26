import styled, { css, IAccordion, IStyledSystem } from 'styled-components';
import { flexbox, position, space } from 'styled-system';

import { variable } from '@/styles/variable';

export const AccordionStyled = styled.div<IStyledSystem>`
  ${position};

  display: flex;
  flex-direction: column;
`;

export const AccordionChangeStyled = styled.div<IAccordion>`
  svg {
    fill: ${({ theme }): string => theme.svgColor.primary};
    max-width: 18px;
    transform: ${({ active }): string => (active ? 'rotate(180deg)' : 'rotate(0deg)')};
    transform-origin: 50% 50%;
    transition:
      fill ${variable.animation.transition},
      transform ${variable.animation.transition};
    vertical-align: middle;
  }
`;

export const AccordionFormChangeStyled = styled(AccordionChangeStyled)`
  svg {
    fill: ${({ theme }): string => theme.svgColor.secondary};
    max-width: 14px;
    transform: ${({ active }): string => (active ? 'rotate(0deg)' : 'rotate(-90deg)')};
  }
`;

export const AccordionItemStyled = styled.div<IAccordion>`
  ${flexbox};

  align-items: center;
  cursor: pointer;
  display: flex;
  flex: 1 0 auto;
  ${({ justifyContent }): string | undefined =>
    justifyContent === undefined ? 'justify-content: space-between' : undefined};

  ${({ obj: { hoverBgColor = 'transparent', hoverColor = variable.color.tertiary } = {} }): any => css`
    &:hover {
      background-color: ${hoverBgColor};

      span {
        color: ${hoverColor};
      }

      svg {
        fill: ${hoverColor};
      }
    }
  `}

  span {
    color: ${({ theme }): string => theme.textColor.primary};
    line-height: 1;
    transition: color ${variable.animation.transition};
    vertical-align: middle;
  }

  svg {
    fill: ${({ theme }): string => theme.svgColor.primary};
  }
`;

export const AccordionItemContentStyled = styled.div<IAccordion>`
  ${position};

  display: flex;
  flex-direction: column;
  height: ${({ active }): any => (active ? 'auto' : 0)};
  overflow: ${({ active }): any => (active ? 'visible' : 'hidden')};
  transition: height ${variable.animation.transitionFast};
  width: 100%;
`;

export const AccordionItemTextStyled = styled.div<IStyledSystem>`
  ${space};
`;
