import React, { ReactElement } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Spacer } from '@/styles/layout';
import { BoxDocs, Title1Docs, Title2Docs } from '@/styles/storybook';
import { P, Span, Subtitle1, Title1, Title2, Title3, Title4, Title5 } from '@/styles/text';

function TypographyWithHooks(): ReactElement {
  return (
    <>
      <Title1Docs>Typography</Title1Docs>

      <Title2Docs>Headlines</Title2Docs>

      <BoxDocs flexDirection="column">
        <Title1>Title1</Title1>

        <P>{'<Title1>Title1</Title1>'}</P>
      </BoxDocs>

      <BoxDocs flexDirection="column">
        <Title2>Title2</Title2>

        <P>{'<Title2>Title2</Title2>'}</P>
      </BoxDocs>

      <BoxDocs flexDirection="column">
        <Title3>Title3</Title3>

        <Spacer />

        <P>{'<Title3>Title3</Title3>'}</P>
      </BoxDocs>

      <BoxDocs flexDirection="column">
        <Title4>Title4</Title4>

        <Spacer />

        <P>{'<Title4>Title4</Title4>'}</P>
      </BoxDocs>

      <BoxDocs flexDirection="column">
        <Title5>Title5</Title5>

        <Spacer />

        <P>{'<Title5>Title5</Title5>'}</P>
      </BoxDocs>

      <Title2Docs>Subtitles</Title2Docs>

      <BoxDocs flexDirection="column">
        <Subtitle1>Subtitle1</Subtitle1>

        <Spacer />

        <P>{'<Subtitle1>Subtitle1</Subtitle1>'}</P>
      </BoxDocs>

      <Title2Docs>Texts</Title2Docs>

      <BoxDocs flexDirection="column">
        <P>paragraph</P>

        <Spacer />

        <P>{'<P>paragraph</P>'}</P>
      </BoxDocs>

      <BoxDocs flexDirection="column">
        <Span>span</Span>

        <Spacer />

        <P>{'<Span>span</Span>'}</P>
      </BoxDocs>
    </>
  );
}

export default {
  title: 'Design/Typography'
} as Meta;

export const Typography: StoryObj = {
  render: () => <TypographyWithHooks />
};
