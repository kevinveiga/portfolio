import React, { ReactElement, useCallback, useEffect, useState } from 'react';

import dayjs from 'dayjs';
import useEmblaCarousel from 'embla-carousel-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import { urlManager } from '@/configApp';
import { truncateText } from '@/helpers/stringManipulation';
import { ICarousel } from '@/interface';

import { Button } from '@/components/button/button';
import {
    CarouselStyled,
    CarouselContainerStyled,
    CarouselDotsStyled,
    CarouselItemStyled,
    CarouselViewportStyled
} from '@/components/carousel/carouselStyled';
import { CarouselManagerButtonNext, CarouselManagerButtonPrev, CarouselManagerDotButton } from '@/components/carousel/carouselManagerButton';
import { CarouselManagerImages } from '@/components/carousel/carouselManagerImages';
import {
    CarouselManagerCardStyled,
    CarouselManagerCardBottomStyled,
    CarouselManagerCardCircleStyled,
    CarouselManagerCardTopStyled,
    CarouselManagerCardVideoTimeStyled,
    CarouselManagerFadeInStyled,
    CarouselManagerFadeOutStyled,
    CarouselManagerFirstLastCardStyled
} from '@/components/carousel/carouselManagerStyled';
import { Favorite } from '@/components/favorite/favorite';
import { LinkTo } from '@/components/link/linkTo';
import { ProductSvgSymbolByName } from '@/components/svg/svgProductSymbolByName';
import { SvgArrowLeftLarge, SvgDelete, SvgDownload, SvgPlus, SvgPlusCircle, SvgShare } from '@/components/svg/svgStore';

import { Box, Flex } from '@/styles/flex';
import { Spacer, Wrap } from '@/styles/layout';
import { P, Title4 } from '@/styles/text';
import { variable } from '@/styles/variable';

export function CarouselManager({ data, title = '', url = '' }: ICarousel): ReactElement | null {
    // CONTEXT
    const [viewportRef, embla] = useEmblaCarousel({ align: 'start', containScroll: 'trimSnaps', loop: false, skipSnaps: false });
    const { textColor } = useTheme();
    const { t } = useTranslation();

    // STATE
    const [stateMarkFavorite, setStateMarkFavorite] = useState<Record<string, boolean>>({});
    const [stateNextBtnEnabled, setStateNextBtnEnabled] = useState(false);
    const [statePrevBtnEnabled, setStatePrevBtnEnabled] = useState(false);
    const [stateSelectedIndex, setStateSelectedIndex] = useState(0);
    const [stateScrollSnaps, setStateScrollSnaps] = useState<any>([]);

    // FUNCTION
    const handleFavorite = (id = '', value = false): void => {
        setStateMarkFavorite((prevState) => ({ ...prevState, [id]: !value }));

        // TODO: alterar favorito na API
    };

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
            <CarouselManagerFadeInStyled active={!stateNextBtnEnabled} left={`calc(${variable.space.spacingMD} - ${variable.space.spacingXXS})`} />

            <CarouselViewportStyled ref={viewportRef} width={`calc(100% - (${variable.space.spacingMD} * 2) + ${variable.space.spacingXXS} * 2)`}>
                <CarouselContainerStyled>
                    <CarouselItemStyled minWidth={{ d: '90%', md: '26%' }}>
                        <LinkTo link={`${urlManager}/${title as string}`}>
                            <CarouselManagerFirstLastCardStyled alignItems="center" flexDirection="column" justifyContent="center">
                                <SvgPlusCircle height="24px" />

                                <Spacer />

                                <div>
                                    <P color={textColor.secondary}>{`${t('new', { ns: 'glossary' })} ${t(title, {
                                        ns: 'glossary'
                                    })}`}</P>
                                </div>
                            </CarouselManagerFirstLastCardStyled>
                        </LinkTo>
                    </CarouselItemStyled>

                    {data.map((obj: Record<string, any>) => {
                        const favorite = stateMarkFavorite ? stateMarkFavorite[obj.id] ?? obj.favorite : false;

                        return (
                            <CarouselItemStyled key={obj.id} minWidth={{ d: '90%', md: '26%' }}>
                                <LinkTo link={obj.url}>
                                    <CarouselManagerCardStyled>
                                        <Spacer />

                                        <CarouselManagerCardTopStyled>
                                            {obj.videoTime ? (
                                                <CarouselManagerCardVideoTimeStyled>{`${
                                                    obj.videoTime as string
                                                } min`}</CarouselManagerCardVideoTimeStyled>
                                            ) : null}
                                            <CarouselManagerImages image={obj.images} numberOfImages={obj.images.length} />
                                        </CarouselManagerCardTopStyled>

                                        <Spacer />

                                        <CarouselManagerCardBottomStyled>
                                            <Flex alignItems="flex-start" flex="1 1 auto" justifyContent="space-between">
                                                <Box flexDirection="column">
                                                    <Title4 title={obj.title}>{truncateText(obj.title)}</Title4>

                                                    <P color={textColor.secondary} fontSize="14px" title={obj.description}>
                                                        {truncateText(obj.description)}
                                                    </P>

                                                    <P color={textColor.secondary} fontSize="14px" title={obj.title}>
                                                        {dayjs(obj.date).format('DD/MM/YYYY')}
                                                    </P>
                                                </Box>

                                                <div>
                                                    <Favorite active={favorite} onClick={(): void => handleFavorite(obj.id, favorite)} />
                                                </div>
                                            </Flex>

                                            <Box flex="0 1 auto" justifyContent="flex-end">
                                                {obj.products?.map((product: string) => {
                                                    return (
                                                        <Box key={product} pl={2}>
                                                            <ProductSvgSymbolByName productName={product} />
                                                        </Box>
                                                    );
                                                })}
                                            </Box>

                                            <Spacer height={variable.space.spacingSM} />

                                            <Box flex="0 1 auto" justifyContent="flex-end">
                                                <Button typeStyle="button-unset">
                                                    <SvgPlus height="18px" />
                                                </Button>

                                                <Spacer />

                                                <Button typeStyle="button-unset">
                                                    <SvgShare height="18px" />
                                                </Button>

                                                <Spacer />

                                                <Button typeStyle="button-unset">
                                                    <SvgDownload height="18px" />
                                                </Button>

                                                <Spacer />

                                                <Button typeStyle="button-unset">
                                                    <SvgDelete height="18px" />
                                                </Button>
                                            </Box>
                                        </CarouselManagerCardBottomStyled>

                                        <Spacer />
                                    </CarouselManagerCardStyled>
                                </LinkTo>
                            </CarouselItemStyled>
                        );
                    })}

                    <CarouselItemStyled minWidth={{ d: '90%', md: '26%' }}>
                        <LinkTo link={`${urlManager}/${url}`}>
                            <CarouselManagerFirstLastCardStyled alignItems="center" flexDirection="column" justifyContent="center">
                                <CarouselManagerCardCircleStyled>
                                    <SvgArrowLeftLarge fill={variable.color.primary} height="12px" />
                                </CarouselManagerCardCircleStyled>

                                <Spacer />

                                <div>
                                    <P color={textColor.secondary}>{`${t('see', { ns: 'glossary' })} ${t('all p', {
                                        ns: 'glossary'
                                    })} ${t('the p', { ns: 'glossary' })} ${t(url, { ns: 'glossary' })}`}</P>
                                </div>
                            </CarouselManagerFirstLastCardStyled>
                        </LinkTo>
                    </CarouselItemStyled>
                </CarouselContainerStyled>
            </CarouselViewportStyled>

            <CarouselManagerFadeOutStyled active={stateNextBtnEnabled} right={`calc(${variable.space.spacingMD} - ${variable.space.spacingXXS})`} />

            <Wrap display="flex" position="absolute" px={4} right={0} top="-62px">
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
