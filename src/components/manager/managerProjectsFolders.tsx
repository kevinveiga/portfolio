import React, { ReactElement, useRef } from 'react';

import { FormHandles } from '@unform/core';
import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';

import { CarouselManager } from '@/components/carousel/carouselManager';
import { LayoutManagerBoxStyled } from '@/components/layout/layoutManagerStyled';
import { ManagerFilter } from '@/components/manager/managerFilter';

import { Box, Flex } from '@/styles/flex';
import { Spacer, Wrap } from '@/styles/layout';
import { Title2 } from '@/styles/text';

import dataProjectsFolders from '@/public/json/projects-folders.json';

// DYNAMIC
const CarouselManagerDynamic = dynamic<any>(() => import('@/components/carousel/carouselManager').then((module) => module.CarouselManager), {
    ssr: false
}) as typeof CarouselManager;

export function ManagerProjectsFolders(): ReactElement {
    // CONTEXT
    const { t } = useTranslation();

    // REF
    const formRef = useRef<FormHandles>(null);

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
        <LayoutManagerBoxStyled>
            <Flex flex="1 1 auto" flexDirection="column" py={5}>
                <Box flex="1 1 auto" px={4}>
                    <Title2 height="38px">{`${t('projects', { ns: 'glossary' })} / ${t('folders', { ns: 'glossary' })}`}</Title2>
                </Box>

                <Wrap display="flex" position="absolute" px={4} right="100px" zIndex={2}>
                    <ManagerFilter
                        handleSubmit={handleSubmit}
                        id="projects-folders"
                        ref={formRef}
                        searchPlaceholder={`${t('search for', { ns: 'glossary' })} ${t('projects', { ns: 'glossary' })}...`}
                    />
                </Wrap>

                <Spacer />

                <Box flex="1 1 auto">
                    <CarouselManagerDynamic data={dataProjectsFolders?.data} title="project" url="projects" />
                </Box>
            </Flex>
        </LayoutManagerBoxStyled>
    );
}
