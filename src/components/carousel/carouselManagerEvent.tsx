import React, { ReactElement, useCallback, useEffect, useState } from 'react';

import dayjs from 'dayjs';
import useEmblaCarousel from 'embla-carousel-react';
import parse from 'html-react-parser';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import { urlManager } from '@/configApp';
import { truncateText } from '@/helpers/stringManipulation';
import { ICarousel } from '@/interface';

import {
    CarouselStyled,
    CarouselContainerStyled,
    CarouselDotsStyled,
    CarouselItemStyled,
    CarouselViewportStyled
} from '@/components/carousel/carouselStyled';
import { CarouselManagerButtonNext, CarouselManagerButtonPrev, CarouselManagerDotButton } from '@/components/carousel/carouselManagerButton';
import {
    CarouselManagerCardCircleStyled,
    CarouselManagerEventCardStyled,
    CarouselManagerEventCardLeftStyled,
    CarouselManagerEventCardLeftLiveNowBoxStyled,
    CarouselManagerEventCardRightStyled,
    CarouselManagerFadeInEventStyled,
    CarouselManagerFadeOutEventStyled
} from '@/components/carousel/carouselManagerStyled';
import { LinkTo } from '@/components/link/linkTo';
import { SvgArrowLeftLarge, SvgLive, SvgSettings } from '@/components/svg/svgStore';

import { Box } from '@/styles/flex';
import { Spacer, Wrap } from '@/styles/layout';
import { P, Span, Title4 } from '@/styles/text';
import { variable } from '@/styles/variable';

import ImgScheduled from '@/public/images/scheduled.png';

export function CarouselManagerEvent({ data }: ICarousel): ReactElement | null {
    // CONTEXT
    const [viewportRef, embla] = useEmblaCarousel({ align: 'start', containScroll: 'trimSnaps', loop: false, skipSnaps: false });
    const { textColor } = useTheme();
    const { t } = useTranslation();

    // STATE
    const [stateNextBtnEnabled, setStateNextBtnEnabled] = useState(false);
    const [statePrevBtnEnabled, setStatePrevBtnEnabled] = useState(false);
    const [stateSelectedIndex, setStateSelectedIndex] = useState(0);
    const [stateScrollSnaps, setStateScrollSnaps] = useState<any>([]);

    // CAROUSEL
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollTo = useCallback((index: number) => embla && embla.scrollTo(index), [embla]);

    const onSelect = useCallback(() => {
        if (!embla) {
            return undefined;
        }

        setStateNextBtnEnabled(embla.canScrollNext());
        setStatePrevBtnEnabled(embla.canScrollPrev());
        setStateSelectedIndex(embla.selectedScrollSnap());

        return undefined;
    }, [embla, setStateSelectedIndex]);

    useEffect(() => {
        if (!embla) {
            return undefined;
        }

        embla.reInit();

        setStateScrollSnaps(embla.scrollSnapList());

        onSelect();

        embla.on('select', onSelect);

        return () => {
            embla.off('select', onSelect);
        };
    }, [data, embla, setStateScrollSnaps, onSelect]);

    return data ? (
        <CarouselStyled my={`calc(-${variable.space.spacingXXS} * 2)`}>
            <CarouselManagerFadeInEventStyled active={statePrevBtnEnabled} left={`calc(${variable.space.spacingMD} - ${variable.space.spacingXXS})`}>
                <div />

                <div />
            </CarouselManagerFadeInEventStyled>

            <CarouselViewportStyled ref={viewportRef} width={`calc(100% - (${variable.space.spacingMD} * 2) + ${variable.space.spacingXXS} * 2)`}>
                <CarouselContainerStyled>
                    {data.map((obj: Record<string, any>) => {
                        const title = `${t(dayjs(obj.date).format('dddd'), { ns: 'glossary' })} - ${dayjs(obj.date).format('DD/MM/YYYY')}`;

                        return (
                            <CarouselItemStyled key={obj.id} minWidth={{ d: '90%', md: '40%' }}>
                                <LinkTo link={obj.url}>
                                    <CarouselManagerEventCardStyled flexDirection="row">
                                        <CarouselManagerEventCardLeftStyled>
                                            {obj.live ? (
                                                <>
                                                    <SvgLive height="32px" />

                                                    <Spacer />

                                                    <CarouselManagerEventCardLeftLiveNowBoxStyled>
                                                        <Box
                                                            backgroundColor={variable.color.grayLight4}
                                                            borderRadius="50%"
                                                            height="12px"
                                                            width="12px"
                                                        />

                                                        <Spacer width={variable.space.spacingXS} />

                                                        <P fontSize="14px" fontWeight={700}>{`${t('live', { ns: 'glossary' })} ${t('now', {
                                                            ns: 'glossary'
                                                        })}`}</P>
                                                    </CarouselManagerEventCardLeftLiveNowBoxStyled>
                                                </>
                                            ) : (
                                                <Image layout="fill" src={ImgScheduled} priority={true} />
                                            )}
                                        </CarouselManagerEventCardLeftStyled>

                                        <CarouselManagerEventCardRightStyled>
                                            <Box flex="1 1 auto" flexDirection="column">
                                                {obj.live ? (
                                                    <Title4 title={obj.title}>{truncateText(obj.title)}</Title4>
                                                ) : (
                                                    <>
                                                        <Title4 title={`${title} - ${dayjs(obj.time).format('HH:MM')}`}>
                                                            {`${truncateText(parse(title).toString())} - `}
                                                            <Span color={variable.color.secondary}>{dayjs(obj.time).format('HH:MM')}</Span>
                                                        </Title4>

                                                        <P color={textColor.secondary} fontSize="14px" title={obj.title}>
                                                            {truncateText(obj.title)}
                                                        </P>
                                                    </>
                                                )}

                                                <P color={textColor.secondary} fontSize="14px" title={obj.description}>
                                                    {truncateText(obj.description)}
                                                </P>
                                            </Box>

                                            <Box alignContent="flex-end" flex="0 1 auto" justifyContent="flex-end">
                                                <SvgSettings height="20px" />
                                            </Box>
                                        </CarouselManagerEventCardRightStyled>
                                    </CarouselManagerEventCardStyled>
                                </LinkTo>
                            </CarouselItemStyled>
                        );
                    })}

                    <CarouselItemStyled minWidth={{ d: '90%', md: '40%' }}>
                        <LinkTo link={`${urlManager}/events`}>
                            <CarouselManagerEventCardStyled alignItems="center" justifyContent="center">
                                <CarouselManagerCardCircleStyled>
                                    <SvgArrowLeftLarge fill={variable.color.primary} height="12px" />
                                </CarouselManagerCardCircleStyled>

                                <Spacer />

                                <div>
                                    <P color={textColor.secondary}>{`${t('see', { ns: 'glossary' })} ${t('all p', {
                                        ns: 'glossary'
                                    })} ${t('the p', { ns: 'glossary' })} ${t('events', { ns: 'glossary' })}`}</P>
                                </div>
                            </CarouselManagerEventCardStyled>
                        </LinkTo>
                    </CarouselItemStyled>
                </CarouselContainerStyled>
            </CarouselViewportStyled>

            <CarouselManagerFadeOutEventStyled
                active={stateNextBtnEnabled}
                right={`calc(${variable.space.spacingMD} - ${variable.space.spacingXXS})`}
            >
                <div />

                <div />
            </CarouselManagerFadeOutEventStyled>

            <Wrap display="flex" position="absolute" px={4} right={0} top="-90px">
                <CarouselManagerButtonPrev disabled={!statePrevBtnEnabled} onClick={scrollPrev} />

                <Spacer width={variable.space.spacingXS} />

                <CarouselManagerButtonNext disabled={!stateNextBtnEnabled} onClick={scrollNext} />
            </Wrap>

            <Spacer />

            <CarouselDotsStyled>
                {stateScrollSnaps.map((obj: any, index: number) => {
                    const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];

                    return <CarouselManagerDotButton active={index === stateSelectedIndex} key={uint32} onClick={(): void => scrollTo(index)} />;
                })}
            </CarouselDotsStyled>
        </CarouselStyled>
    ) : (
        <P p={4}>{t('no data found', { ns: 'glossary' })}</P>
    );
}
