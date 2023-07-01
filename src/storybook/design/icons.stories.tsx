import React, { ReactElement } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import {
  SvgArrowDown,
  SvgArrowLeft,
  SvgArrowRight,
  SvgChecked,
  SvgClose,
  SvgDarkLightMode,
  SvgDocument,
  SvgEnvelope,
  SvgFilter,
  SvgFlagBrazil,
  SvgFlagSpain,
  SvgFlagUsa,
  SvgGoogle,
  SvgIdentification,
  SvgInvalid,
  SvgLock,
  SvgLogoLoader,
  SvgLogout,
  SvgMenu,
  SvgMoney,
  SvgNumber,
  SvgPhone,
  SvgPin,
  SvgThumbnail,
  SvgUser,
  SvgUserPlus,
  SvgView,
  SvgViewDisabled
} from '@/components/svg/svgStore';

import { Box, Flex } from '@/styles/flex';
import { BoxDocs, Title1Docs } from '@/styles/storybook';
import { P } from '@/styles/text';
import { variable } from '@/styles/variable';

function IconsWithHooks(): ReactElement {
  return (
    <>
      <Title1Docs>Icons</Title1Docs>

      <Flex columnGap={variable.space.spacingSM}>
        <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
          <SvgArrowDown />

          <P>Arrow Down</P>
        </BoxDocs>

        <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
          <SvgArrowLeft />

          <P>Arrow Left</P>
        </BoxDocs>

        <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
          <SvgArrowRight />

          <P>Arrow Right</P>
        </BoxDocs>

        <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
          <SvgChecked />

          <P>Checked</P>
        </BoxDocs>

        <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
          <SvgClose />

          <P>Close</P>
        </BoxDocs>

        <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
          <SvgDarkLightMode />

          <P>Dark / Light Mode</P>
        </BoxDocs>

        <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
          <SvgDocument />

          <P>Document</P>
        </BoxDocs>

        <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
          <SvgEnvelope />

          <P>Email</P>
        </BoxDocs>

        <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
          <SvgFilter />

          <P>Filter</P>
        </BoxDocs>

        <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
          <SvgFlagBrazil />

          <P>Flag Brazil</P>
        </BoxDocs>

        <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
          <SvgFlagSpain />

          <P>Flag Spain</P>
        </BoxDocs>

        <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
          <SvgFlagUsa />

          <P>Flag Usa</P>
        </BoxDocs>

        <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
          <SvgGoogle />

          <P>Google</P>
        </BoxDocs>

        <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
          <SvgIdentification />

          <P>Identification</P>
        </BoxDocs>

        <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
          <SvgInvalid />

          <P>Invalid</P>
        </BoxDocs>

        <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
          <SvgLock />

          <P>Lock</P>
        </BoxDocs>

        <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
          <Box alignSelf="center" height="25px" width="25px">
            <SvgLogoLoader />
          </Box>

          <P>Logo Loader</P>
        </BoxDocs>

        <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
          <SvgLogout />

          <P>Logout</P>
        </BoxDocs>

        <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
          <SvgMenu />

          <P>Menu</P>
        </BoxDocs>

        <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
          <SvgMoney />

          <P>Money</P>
        </BoxDocs>

        <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
          <SvgNumber />

          <P>Number</P>
        </BoxDocs>

        <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
          <SvgPhone />

          <P>Phone</P>
        </BoxDocs>

        <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
          <SvgPin />

          <P>Pin</P>
        </BoxDocs>

        <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
          <SvgThumbnail />

          <P>Thumbnail</P>
        </BoxDocs>

        <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
          <SvgUser />

          <P>User</P>
        </BoxDocs>

        <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
          <SvgUserPlus />

          <P>User Plus</P>
        </BoxDocs>

        <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
          <SvgView />

          <P>View</P>
        </BoxDocs>

        <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
          <SvgViewDisabled />

          <P>View Disabled</P>
        </BoxDocs>
      </Flex>
    </>
  );
}

export default {
  title: 'Design/Icons'
} as Meta;

export const Icons: StoryObj = {
  render: () => <IconsWithHooks />
};
