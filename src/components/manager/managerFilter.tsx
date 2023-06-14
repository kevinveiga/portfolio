import React, { forwardRef, ReactElement, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import { IManagerFilter } from '@/interface';

import { Button } from '@/components/button/button';
import { Input } from '@/components/form/form';
import { SelectCustom } from '@/components/form/formCustom';
import { FormStyled } from '@/components/form/formStyled';
import { ManagerFilterStyled, ManagerFilterSearchStyled } from '@/components/manager/managerStyled';
import { SvgFilter, SvgSearch } from '@/components/svg/svgStore';

import { Spacer } from '@/styles/layout';
import { variable } from '@/styles/variable';

export const ManagerFilter = forwardRef<any, any>(function ManagerFilter(
    { handleSubmit, id, searchPlaceholder = '' }: IManagerFilter,
    ref
): ReactElement {
    // CONTEXT
    const { borderColor, inputBgColor } = useTheme();
    const { t } = useTranslation();

    // VARIABLE
    const optionsFilterOrder = [
        {
            label: t('name', { ns: 'glossary' }),
            value: 'name'
        },
        {
            label: `${t('last p', { ns: 'glossary' })} ${t('modified p', { ns: 'glossary' })}`,
            value: 'last-modified'
        },
        {
            label: `${t('last p', { ns: 'glossary' })} ${t('accessed p', { ns: 'glossary' })}`,
            value: 'creation-date'
        }
    ];

    const optionsFilterType = [
        {
            label: t('all p', { ns: 'glossary' }),
            value: 'all'
        },
        {
            label: t('upcoming', { ns: 'glossary' }),
            value: 'upcoming'
        },
        {
            label: t('live', { ns: 'glossary' }),
            value: 'live'
        },
        {
            label: t('favorite p', { ns: 'glossary' }),
            value: 'favorite'
        },
        {
            label: `${t('last p', { ns: 'glossary' })} ${t('accessed p', { ns: 'glossary' })}`,
            value: 'last-accessed'
        },
        {
            label: `${t('last p', { ns: 'glossary' })} ${t('finished p', { ns: 'glossary' })}`,
            value: 'last-finished'
        }
    ];

    // STATE
    const [stateSearchChange, setStateSearchChange] = useState(false);

    // FUNCTION
    const handleFormChange = (): void => {
        // TODO: submit form
    };

    // TODO: pesquisar ao digitar no campo de search

    return (
        <FormStyled initialData={{ [`${id}-order`]: '', [`${id}-search`]: '', [`${id}-type`]: '' }} onSubmit={handleSubmit} ref={ref}>
            <ManagerFilterStyled>
                <div>
                    <ManagerFilterSearchStyled active={stateSearchChange}>
                        <Button onClick={(): void => setStateSearchChange((prevState) => !prevState)} typeStyle="button-unset">
                            <SvgSearch />
                        </Button>

                        <Input
                            backgroundColor={inputBgColor.secondary}
                            borderColor={borderColor.secondary}
                            idInput={`id-${id}-search`}
                            name={`${id}-search`}
                            placeholder={searchPlaceholder}
                        />
                    </ManagerFilterSearchStyled>
                </div>

                <Spacer width={variable.space.spacingXS} />

                <div>
                    <SelectCustom
                        backgroundColor={inputBgColor.secondary}
                        borderColor={borderColor.secondary}
                        cbFunction={handleFormChange}
                        idInput={`id-${id}-type`}
                        items={optionsFilterType}
                        name={`${id}-type`}
                        selectLabel={optionsFilterType[0].label}
                        selectValue={optionsFilterType[0].value}
                        svgComponent={SvgFilter}
                        width="200px"
                    />
                </div>

                <Spacer width={variable.space.spacingXS} />

                <div>
                    <SelectCustom
                        backgroundColor={inputBgColor.secondary}
                        borderColor={borderColor.secondary}
                        cbFunction={handleFormChange}
                        idInput={`id-${id}-order`}
                        items={optionsFilterOrder}
                        name={`${id}-order`}
                        selectLabel={optionsFilterOrder[0].label}
                        selectValue={optionsFilterOrder[0].value}
                        width="200px"
                    />
                </div>
            </ManagerFilterStyled>
        </FormStyled>
    );
});
