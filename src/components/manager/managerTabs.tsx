import React, { ReactElement } from 'react';

import { useTranslation } from 'react-i18next';

import { ITab, ITabs } from '@/interface';

import { Button } from '@/components/button/button';
import { ManagerTabsStyled } from '@/components/manager/managerStyled';

import { P } from '@/styles/text';

export function ManagerTabs({ active, cbFunction, items }: ITabs): ReactElement | null {
    // CONTEXT
    const { t } = useTranslation();

    return (
        <ManagerTabsStyled>
            {items ? (
                items.map((item: ITab) => {
                    return (
                        <li key={item.id}>
                            <Button
                                className={active === item.id ? 'active' : ''}
                                onClick={(): void => (cbFunction ? cbFunction(item.id) : undefined)}
                                typeStyle="button-unset"
                            >
                                <P fontWeight={700} textTransformFirstLetter="capitalize">
                                    {item.name}
                                </P>
                            </Button>
                        </li>
                    );
                })
            ) : (
                <P>{t('no data found', { ns: 'glossary' })}</P>
            )}
        </ManagerTabsStyled>
    );
}
