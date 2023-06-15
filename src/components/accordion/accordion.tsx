import React, { ReactElement } from 'react';

import parse from 'html-react-parser';

import { IAccordion, IAccordionItem } from '@/interface';
import { usePersistedState } from '@/stores/persistedState/usePersistedState';

import {
  AccordionStyled,
  AccordionChangeStyled,
  AccordionItemStyled,
  AccordionItemContentStyled,
  AccordionItemTextStyled
} from '@/components/accordion/accordionStyled';
import { SvgArrowDown } from '@/components/svg/svgStore';

import { LineHorizontal, Spacer } from '@/styles/layout';
import { Span } from '@/styles/text';

export function Accordion({ id, obj }: IAccordion): ReactElement | null {
  // STATE
  const [stateAccordion, setStateAccordion] = usePersistedState<string>(`accordion-${id}`, '');

  // FUNCTION
  const toggleAccordion = (value: string): void => {
    setStateAccordion((state) => (state !== value ? value : ''));
  };

  return obj ? (
    <div>
      {obj?.map((item: IAccordionItem) => {
        return (
          <AccordionStyled key={`${id}-${item.id}`}>
            <AccordionItemStyled onClick={(): void => toggleAccordion(`${id}-${item.id}`)}>
              <AccordionItemTextStyled>
                <Span>{item.title}</Span>
              </AccordionItemTextStyled>

              <AccordionChangeStyled active={stateAccordion === `${id}-${item.id}`}>
                <SvgArrowDown />
              </AccordionChangeStyled>
            </AccordionItemStyled>

            <Spacer />

            <AccordionItemContentStyled active={stateAccordion === `${id}-${item.id}`}>
              <Spacer />

              {parse(item.content || '')}

              <Spacer />
            </AccordionItemContentStyled>

            <LineHorizontal />

            <Spacer />
          </AccordionStyled>
        );
      })}
    </div>
  ) : null;
}
