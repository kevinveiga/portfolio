import React, { ReactElement } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import {
    SvgArrowDown,
    SvgArrowLeft,
    SvgArrowLeftLarge,
    SvgArrowRight,
    SvgArrowTriangle,
    SvgBalloonMessage,
    SvgBar,
    SvgCalculator,
    SvgCalendar,
    SvgCharacter,
    SvgChartBar,
    SvgChecked,
    SvgClipboard,
    SvgClipboardPlus,
    SvgClockHistory,
    SvgClose,
    SvgCollection,
    SvgDarkLightMode,
    SvgDashboard,
    SvgDelete,
    SvgDocument,
    SvgDownload,
    SvgEdit,
    SvgEmail,
    SvgFilter,
    SvgFlagBrazil,
    SvgFlagSpain,
    SvgFlagUsa,
    SvgFolder,
    SvgFolderArrow,
    SvgGoogle,
    SvgHelp,
    SvgHelpCenter,
    SvgHome,
    SvgIdentification,
    SvgInvalid,
    SvgLive,
    SvgLock,
    SvgLogoLoader,
    SvgLogout,
    SvgMenu,
    SvgMenuClose,
    SvgMenuWithArrow,
    SvgMinus,
    SvgMoney,
    SvgMonitoring,
    SvgNotification,
    SvgNumber,
    SvgOrder,
    SvgPartner,
    SvgPencil,
    SvgPhone,
    SvgPin,
    SvgPlus,
    SvgPlusCircle,
    SvgSad,
    SvgScheduled,
    SvgSearch,
    SvgSettings,
    SvgShare,
    SvgSmile,
    SvgStar,
    SvgStarWithBorder,
    SvgTriangle,
    SvgThumbnail,
    SvgUpload,
    SvgUser,
    SvgUserPlus,
    SvgValid,
    SvgView,
    SvgViewDisabled,
    SvgWallet
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
                    <SvgArrowLeftLarge />

                    <P>Arrow Left Large</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgArrowRight />

                    <P>Arrow Right</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgArrowTriangle />

                    <P>Arrow Triangle</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgBalloonMessage />

                    <P>Balloon Message</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgBar />

                    <P>Bar</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgCalculator />

                    <P>Calculator</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgCalendar />

                    <P>Calendar</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgCharacter />

                    <P>Character</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgChartBar />

                    <P>Chart Bar</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgChecked />

                    <P>Checked</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgClipboard />

                    <P>Clipboard</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgClipboardPlus />

                    <P>Clipboard Plus</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgClockHistory />

                    <P>Clock History</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgClose />

                    <P>Close</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgCollection />

                    <P>Collection</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgDarkLightMode />

                    <P>Dark / Light Mode</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgDashboard />

                    <P>Dashboard</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgDelete />

                    <P>Delete</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgDocument />

                    <P>Document</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgDownload />

                    <P>Download</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgEdit />

                    <P>Edit</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgEmail />

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
                    <SvgFolder />

                    <P>Folder</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgFolderArrow />

                    <P>Folder Arrow</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgGoogle />

                    <P>Google</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgHelp />

                    <P>Help</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgHelpCenter />

                    <P>Help Center</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgHome />

                    <P>Home</P>
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
                    <SvgLive />

                    <P>Live</P>
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
                    <SvgMenuClose />

                    <P>Menu Close</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgMenuWithArrow />

                    <P>Menu With Arrow</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgMinus />

                    <P>Minus</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgMoney />

                    <P>Money</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgMonitoring />

                    <P>Monitoring</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgNotification />

                    <P>Notification</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgNumber />

                    <P>Number</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgOrder />

                    <P>Order</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgPartner />

                    <P>Partner</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgPencil />

                    <P>Pencil</P>
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
                    <SvgPlus />

                    <P>Plus</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgPlusCircle />

                    <P>Plus Circle</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgSad />

                    <P>Sad</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgScheduled />

                    <P>Scheduled</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgSearch />

                    <P>Search</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgSettings />

                    <P>Settings</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgShare />

                    <P>Share</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgSmile />

                    <P>Smile</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgStar />

                    <P>Star</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgStarWithBorder />

                    <P>Star With Border</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgTriangle />

                    <P>Triangle</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgThumbnail />

                    <P>Thumbnail</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgUpload />

                    <P>Upload</P>
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
                    <SvgValid />

                    <P>Valid</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgView />

                    <P>View</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgViewDisabled />

                    <P>View Disabled</P>
                </BoxDocs>

                <BoxDocs flexDirection="column" justifyContent="center" rowGap={variable.space.spacingXS}>
                    <SvgWallet />

                    <P>Wallet</P>
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
