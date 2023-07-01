import React, { ReactElement } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { BoxDocs, ListDocs, StrongDocs, Title1Docs, Title2Docs } from '@/styles/storybook';

function ImageWithHooks(): ReactElement {
  return (
    <>
      <Title1Docs>Image</Title1Docs>

      <Title2Docs>Padrões</Title2Docs>

      <ListDocs>
        <li>
          Para imagens <StrongDocs>internas</StrongDocs> com otimização do NextJS, use o componente de imagem do NextJS{' '}
          <a href="https://nextjs.org/docs/api-reference/next/image">(link)</a>. Ex:
        </li>
      </ListDocs>

      <BoxDocs>
        <SyntaxHighlighter language="javascript">
          {`import Image from 'next/image';

import image1 from '@/public/images/image-1.png';

<Image alt="Image" height="150px" objectFit="contain" objectPosition="0 0" src={image1} />;

<Image alt="Image" layout="fill" objectFit="cover" objectPosition="50% 0" src={image1} />;`}
        </SyntaxHighlighter>
      </BoxDocs>

      <ListDocs>
        <li>
          Para imagens <StrongDocs>externas</StrongDocs> ou para usar como background, use os Styled Components de
          imagem. Ex:
        </li>
      </ListDocs>

      <BoxDocs>
        <SyntaxHighlighter language="javascript">
          {`import { BgImageOverlay, Image } from '@/styles/image';

<Image alt={data.alt} src={data.foto} />

<BgImageOverlay src={\`\${urlImages}/images/banner-principal.jpg\`} />`}
        </SyntaxHighlighter>
      </BoxDocs>

      <Title2Docs>Referências</Title2Docs>

      <ListDocs>
        <li>
          Otimização de imagens.{' '}
          <a href="https://squoosh.app/" rel="noopener noreferrer" target="_blank">
            (link)
          </a>
        </li>
      </ListDocs>
    </>
  );
}

export default {
  title: 'Documentation/Image'
} as Meta;

export const Image: StoryObj = {
  render: () => <ImageWithHooks />
};
