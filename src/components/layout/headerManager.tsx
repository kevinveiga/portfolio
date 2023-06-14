import React, { ReactElement, useRef, useState } from 'react';

import { FormHandles } from '@unform/core';
import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import { capitalizeFirstLetter } from '@/helpers/stringManipulation';
import { IModal } from '@/interface';
import { useApp } from '@/pages/_app';
import { usePage } from '@/stores/page/usePage';
import { TLanguage } from '@/type';

import { Button } from '@/components/button/button';
import { Input } from '@/components/form/form';
import { FormStyled } from '@/components/form/formStyled';
import { LanguageFlag } from '@/components/language/languageFlag';
import {
    HeaderManagerStyled,
    HeaderManagerItemsStyled,
    HeaderManagerLanguageModalStyled,
    HeaderManagerMainActionModalStyled,
    HeaderManagerSearchStyled,
    HeaderManagerUserStyled
} from '@/components/layout/headerManagerStyled';
import { Modal } from '@/components/modal/modal';
import {
    SvgFlagBrazil,
    SvgFlagUsa,
    SvgHelp,
    SvgLive,
    SvgNotification,
    SvgSearch,
    SvgTriangle,
    SvgUpload,
    SvgUser,
    SvgWallet
} from '@/components/svg/svgStore';

import { Box, Flex } from '@/styles/flex';
import { Spacer } from '@/styles/layout';
import { Title3, Title5 } from '@/styles/text';
import { variable } from '@/styles/variable';

// DYNAMIC
const ModalDynamic = dynamic<any>(() => import('@/components/modal/modal').then((module) => module.Modal), { ssr: false }) as typeof Modal;

export function HeaderManager(): ReactElement {
    // CONTEXT
    const { setStateModalMessage, setStateTheme } = useApp();
    const { setStateLanguage } = usePage();
    const { borderColor, inputBgColor } = useTheme();
    const { t, i18n } = useTranslation();

    // REF
    const formRef = useRef<FormHandles>(null);

    // STATE
    const [stateLanguageModal, setStateLanguageModal] = useState(false);
    const [stateMainActionModal, setStateMainActionModal] = useState(false);
    const [stateModal, setStateModal] = useState<IModal | null>(null);
    const [stateSearchChange, setStateSearchChange] = useState(false);

    // FUNCTION
    const handleFormChange = (): void => {
        // TODO: submit form
    };

    const handleLanguage = (value: TLanguage): void => {
        setStateLanguage(value);
        setStateLanguageModal((prevState) => !prevState);
    };

    // FORM
    const handleSubmit = (formData: any): void => {
        const submit = async (): Promise<void> => {
            // postFetch({ fetchData: formData, url: apiAuth })
            //     .then((response: Record<string, any>) => {
            //         const { data: { message = '', user = {} } = {}, status = 0 } = response;
            //         if (status === 200) {
            //             // Stores user information
            //             setStateAuth(JSON.stringify(user));
            //             // Router redirect
            //             router.push(redirectToUrl()).catch(() => null);
            //         } else {
            //             setStateModalMessage({ content: ErrorMessage(message), type: 'error' });
            //         }
            //     })
            //     .catch((error) => {
            //         const { response: { data: { message = '' } = {} } = {} } = error;
            //         setStateModalMessage({ content: ErrorMessage(message), type: 'error' });
            //     });
        };

        submit().catch(() => null);
    };

    return (
        <HeaderManagerStyled>
            <Flex alignItems="center" height="100%" justifyContent="flex-end" px={3} pt={3}>
                <HeaderManagerItemsStyled>
                    <li>
                        <HeaderManagerSearchStyled active={stateSearchChange}>
                            <Button onClick={(): void => setStateSearchChange((prevState) => !prevState)} typeStyle="button-unset">
                                <SvgSearch />
                            </Button>

                            <FormStyled initialData={{ search: '' }} onSubmit={handleSubmit} ref={formRef}>
                                <Input
                                    backgroundColor={inputBgColor?.secondary}
                                    borderColor={borderColor.secondary}
                                    idInput="id-search"
                                    name="search"
                                    placeholder={`${t('search for', { ns: 'glossary' })} ${t('projects', { ns: 'glossary' })}, ${t('videos', {
                                        ns: 'glossary'
                                    })} ${t('and', { ns: 'glossary' })} ${t('outputs', { ns: 'glossary' })}...`}
                                />
                            </FormStyled>
                        </HeaderManagerSearchStyled>
                    </li>

                    <li>
                        <Button typeStyle="button-unset">
                            <SvgHelp />
                        </Button>
                    </li>

                    <li>
                        <Button typeStyle="button-unset">
                            <SvgNotification />
                        </Button>
                    </li>

                    <li>
                        <Button typeStyle="button-unset">
                            <SvgWallet />
                        </Button>
                    </li>

                    <li>
                        <Button onClick={(): void => setStateLanguageModal((prevState) => !prevState)} typeStyle="button-unset">
                            <LanguageFlag language={i18n.language} />
                        </Button>

                        <HeaderManagerLanguageModalStyled active={stateLanguageModal}>
                            <SvgTriangle />

                            <ul>
                                <li>
                                    <Button
                                        onClick={(): void => handleLanguage('pt_BR')}
                                        title={t('portuguese', { ns: 'glossary' }) || ''}
                                        typeStyle="button-unset"
                                    >
                                        <SvgFlagBrazil />
                                    </Button>
                                </li>

                                <li>
                                    <Button
                                        onClick={(): void => handleLanguage('en')}
                                        title={t('english', { ns: 'glossary' }) || ''}
                                        typeStyle="button-unset"
                                    >
                                        <SvgFlagUsa />
                                    </Button>
                                </li>
                            </ul>
                        </HeaderManagerLanguageModalStyled>
                    </li>
                </HeaderManagerItemsStyled>

                <Spacer />

                <Button onClick={(): void => setStateMainActionModal((prevState) => !prevState)} text="Main action" />

                <HeaderManagerMainActionModalStyled active={stateMainActionModal}>
                    <SvgTriangle />

                    <ul>
                        <li>
                            <Button
                                obj={{ hoverColor: null }}
                                onClick={(): void => {
                                    setStateModal({ content: null });
                                }}
                                typeStyle="button-unset"
                            >
                                <Flex flexDirection="column" rowGap={variable.space.spacingSM}>
                                    <Box>
                                        <SvgLive />

                                        <Spacer />

                                        <Title3>{t('live streaming', { ns: 'glossary' })}</Title3>
                                    </Box>

                                    <Title5>{`${t('process a product by', { ns: 'glossary' })} ${capitalizeFirstLetter(
                                        t('live', { ns: 'glossary' })
                                    )}`}</Title5>
                                </Flex>
                            </Button>
                        </li>

                        <li>
                            <Button
                                obj={{ hoverColor: null }}
                                onClick={(): void => {
                                    setStateModal({ content: null });
                                }}
                                typeStyle="button-unset"
                            >
                                <Flex flexDirection="column" rowGap={variable.space.spacingSM}>
                                    <Box>
                                        <SvgUpload />

                                        <Spacer />

                                        <Title3>{t('upload video', { ns: 'glossary' })}</Title3>
                                    </Box>

                                    <Title5>{`${t('process a product by', { ns: 'glossary' })} VOD`}</Title5>
                                </Flex>
                            </Button>
                        </li>
                    </ul>
                </HeaderManagerMainActionModalStyled>

                <Spacer />

                <HeaderManagerUserStyled>
                    <Button typeStyle="button-unset">
                        <SvgUser />
                    </Button>
                </HeaderManagerUserStyled>

                {/* <HeaderManagerItemsStyled>
                    <Button ariaLabel="dark and light mode" onClick={(): void => setStateTheme((prevState: boolean) => !prevState)} typeStyle="button-unset">
                        <SvgDarkLightMode fill={variable.color.grayLight} />
                    </Button>
                </HeaderManagerItemsStyled> */}
            </Flex>

            {stateModal ? <ModalDynamic maxWidth={variable.breakpoint.md} setActive={setStateModal} zIndex={14} {...stateModal} /> : null}
        </HeaderManagerStyled>
    );
}
