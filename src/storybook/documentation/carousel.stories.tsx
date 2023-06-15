import React, { ReactElement } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { BoxDocs, ListDocs, StrongDocs, Title1Docs, Title2Docs } from '@/styles/storybook';

function CarouselWithHooks(): ReactElement {
  return (
    <>
      <Title1Docs>Carousel</Title1Docs>

      <Title2Docs>Organização</Title2Docs>

      <ListDocs>
        <li>{`Os componentes de carrossel estão na pasta "src/components/carousel".`}</li>

        <li>{`Estilos de uso geral estão no arquivo "src/components/carousel/carouselStyled".`}</li>

        <li>{`Estilos de carousel's do manager estão no arquivo src/components/carousel/carouselManagerStyled".`}</li>
      </ListDocs>

      <Title2Docs>Padrões</Title2Docs>

      <ListDocs>
        <li>
          Um componente Carousel deve ser usado com o <StrongDocs>Dynamic</StrongDocs> do NextJS.
        </li>
      </ListDocs>

      <Title2Docs>Exemplos</Title2Docs>

      <ListDocs>
        <li>Usando o CarouselManagerDefault:</li>
      </ListDocs>

      <BoxDocs>
        <SyntaxHighlighter language="javascript">
          {`import dynamic from 'next/dynamic';

import { CarouselManagerDefault } from '@/components/carousel /carouselManagerDefault';

// DYNAMIC
const CarouselManagerDefaultDynamic = dynamic<any>(() => import('@/components/carousel/carouselManagerDefault').then ((module) => module.CarouselManagerDefault), { ssr: false }) as typeof CarouselManagerDefault;

...

<CarouselManagerDefaultDynamic data={dataProjectsFolders?.data} type=" project" url="projects" />`}
        </SyntaxHighlighter>
      </BoxDocs>

      <Title2Docs>Dicas</Title2Docs>

      <ListDocs>
        <li>
          No elemento <StrongDocs>CarouselViewportStyled</StrongDocs> deve ter somente um elemento filho.
        </li>
      </ListDocs>

      <Title2Docs>Referências</Title2Docs>

      <ListDocs>
        <li>
          Embla Carousel.{' '}
          <a href="https://www.embla-carousel.com/" rel="noopener noreferrer" target="_blank">
            (link)
          </a>
        </li>
      </ListDocs>
    </>
  );
}

export default {
  title: 'Documentation/Carousel'
} as Meta;

export const Carousel: StoryObj = {
  render: () => <CarouselWithHooks />
};
