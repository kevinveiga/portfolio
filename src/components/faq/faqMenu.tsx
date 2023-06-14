import React, { ReactElement } from 'react';

import { useTranslation } from 'react-i18next';

import { IProduct, ISubProduct } from '@/interface';
import { queryProductsWithSubProducts } from '@/services/graphqlQuery';
import { useSWRGetGraphql } from '@/stores/fetch/useSWRGetGraphql';
import { usePage } from '@/stores/page/usePage';
import { usePersistedState } from '@/stores/persistedState/usePersistedState';

import { Button } from '@/components/button/button';
import { FaqMenuStyled, FaqMenuItemsStyled, FaqMenuItemsSubMenuStyled, FaqMenuItemTextStyled } from '@/components/faq/faqStyled';
import { LinkTo } from '@/components/link/linkTo';
import { ProductSvgSymbolByName } from '@/components/svg/svgProductSymbolByName';

import { Box, Flex } from '@/styles/flex';
import { Spacer } from '@/styles/layout';
import { P, Span } from '@/styles/text';
import { variable } from '@/styles/variable';

export function FaqMenu(): ReactElement | null {
    // CONTEXT
    const { stateMenu, setStateMenu } = usePage();
    const { t, i18n } = useTranslation();

    // VARIABLE
    const colorsProductDefaultSymbol = [variable.color.tertiary, variable.color.primary, variable.color.secondary];

    // STATE
    const [stateSubMenu, setStateSubMenu] = usePersistedState<string>('submenu', '');

    // CUSTOM HOOK
    const { data, isLoading } = useSWRGetGraphql({
        graphqlQuery: queryProductsWithSubProducts,
        graphqlVariables: { locale: [i18n.language] }
    });

    const productsData: IProduct[] = data?.products;

    // FUNCTION
    const toggleSubMenu = (value: string): void => {
        setStateSubMenu((state) => (state !== value ? value : ''));

        setStateMenu(true);
    };

    return (
        <FaqMenuStyled>
            <Flex flexDirection="column">
                <FaqMenuItemsStyled>
                    <ul>
                        {isLoading ? (
                            <li>{t('loading', { ns: 'glossary' })}...</li>
                        ) : productsData?.length > 0 ? (
                            productsData
                                .sort((a: IProduct, b: IProduct) => (a.order || 0) - (b.order || 1))
                                .map((product: IProduct, index: number) => {
                                    return (
                                        <li key={product.id}>
                                            {product.isProduct ? (
                                                <>
                                                    <FaqMenuItemsSubMenuStyled
                                                        active={stateMenu === true && stateSubMenu === product.slug}
                                                        onClick={(): void => toggleSubMenu(product.slug)}
                                                    >
                                                        <Button ariaLabel={product.name} display="flex" typeStyle="button-unset">
                                                            <Flex flexWrap="nowrap">
                                                                <Box justifyContent="center" width="22px">
                                                                    <ProductSvgSymbolByName productName={product.slug} />
                                                                </Box>

                                                                <FaqMenuItemTextStyled active={stateMenu}>
                                                                    <Span>{product.name}</Span>
                                                                </FaqMenuItemTextStyled>
                                                            </Flex>
                                                        </Button>
                                                    </FaqMenuItemsSubMenuStyled>

                                                    {stateMenu === true && product.subProducts && product.subProducts.length > 0 ? (
                                                        <ul>
                                                            {product.subProducts.map((subProduct: ISubProduct) => {
                                                                return (
                                                                    <li key={subProduct.id}>
                                                                        <LinkTo link={`/faq/${product.slug}/${subProduct.slug}`}>
                                                                            <Span>{subProduct.name}</Span>
                                                                        </LinkTo>
                                                                    </li>
                                                                );
                                                            })}
                                                        </ul>
                                                    ) : null}
                                                </>
                                            ) : (
                                                <LinkTo link={`/faq/${product.slug}`}>
                                                    <Flex flexWrap="nowrap">
                                                        <Box justifyContent="center" width="22px">
                                                            <ProductSvgSymbolByName
                                                                fill={colorsProductDefaultSymbol[index % 3]}
                                                                productName={product.slug}
                                                            />
                                                        </Box>

                                                        <FaqMenuItemTextStyled active={stateMenu}>
                                                            <Span>{product.name}</Span>
                                                        </FaqMenuItemTextStyled>
                                                    </Flex>
                                                </LinkTo>
                                            )}
                                        </li>
                                    );
                                })
                        ) : (
                            <li>
                                <P>{t('no data found', { ns: 'glossary' })}</P>
                            </li>
                        )}
                    </ul>
                </FaqMenuItemsStyled>
            </Flex>

            <Spacer />
        </FaqMenuStyled>
    );
}
