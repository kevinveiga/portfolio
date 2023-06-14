import React, { ReactElement, useEffect, useState } from 'react';

import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';

import { capitalizeFirstLetter } from '@/helpers/stringManipulation';
import { usePersistedState } from '@/stores/persistedState/usePersistedState';

import { CarouselManagerEvent } from '@/components/carousel/carouselManagerEvent';
import { LayoutManagerBgStyled, LayoutManagerBoxStyled } from '@/components/layout/layoutManagerStyled';
import { ManagerTabs } from '@/components/manager/managerTabs';

import { Box, Flex } from '@/styles/flex';
import { LineHorizontal, Spacer } from '@/styles/layout';
import { Title2 } from '@/styles/text';

import dataEventsNowUpcoming from '@/public/json/events-now-upcoming.json';
import dataRecentsFinished from '@/public/json/events-recents-finished.json';
import dataScheduled from '@/public/json/events-scheduled.json';

// DYNAMIC
const CarouselManagerEventDynamic = dynamic<any>(
    () => import('@/components/carousel/carouselManagerEvent').then((module) => module.CarouselManagerEvent),
    {
        ssr: false
    }
) as typeof CarouselManagerEvent;

const ManagerTabsDynamic = dynamic<any>(() => import('@/components/manager/managerTabs').then((module) => module.ManagerTabs), {
    ssr: false
}) as typeof ManagerTabs;

export function ManagerEvent(): ReactElement | null {
    // CONTEXT
    const { t } = useTranslation();

    // STATE
    const [stateData, setStateData] = useState<Record<string, any> | null>(null);
    const [stateTab, setStateTab] = usePersistedState('tabs-manager-events', '1');

    useEffect(() => {
        if (stateTab === '1') {
            setStateData(dataEventsNowUpcoming?.data);
        }

        if (stateTab === '2') {
            setStateData(dataRecentsFinished?.data);
        }

        if (stateTab === '3') {
            setStateData(dataScheduled?.data);
        }

        return undefined;
    }, [stateTab]);

    return (
        <LayoutManagerBoxStyled>
            <LayoutManagerBgStyled />

            <Flex flex="1 1 auto" flexDirection="column" py={5}>
                <Box flex="1 1 auto" flexDirection="column" px={4}>
                    <Title2 height="38px">{t('events', { ns: 'glossary' })}</Title2>

                    <Spacer />

                    <Flex width="calc(100% - 92px)" zIndex={2}>
                        <ManagerTabsDynamic
                            active={stateTab}
                            cbFunction={setStateTab}
                            items={[
                                {
                                    id: '1',
                                    name: `${t('now', { ns: 'glossary' })} · ${capitalizeFirstLetter(t('upcoming', { ns: 'glossary' }))}`
                                },
                                { id: '2', name: t('recents finished', { ns: 'glossary' }) },
                                { id: '3', name: t('scheduled', { ns: 'glossary' }) }
                            ]}
                        />
                    </Flex>

                    <LineHorizontal height="2px" mt="-2px" />
                </Box>

                <Spacer />

                <Box flex="1 1 auto">
                    <CarouselManagerEventDynamic data={stateData} />
                </Box>
            </Flex>
        </LayoutManagerBoxStyled>
    );
}
