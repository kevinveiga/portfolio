import React, { ReactElement, useEffect, useMemo, useRef, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { capitalizeFirstLetter } from '@/helpers/stringManipulation';
import { ITreeItem } from '@/interface';

import { Button } from '@/components/button/button';
import { InputStyled } from '@/components/form/formStyled';
import { ProjectFolderStyled } from '@/components/projectFolder/projectFolderStyled';
import { SvgArrowDown, SvgSearch, SvgPencil, SvgPlusCircle } from '@/components/svg/svgStore';
import { TreeItem } from '@/components/tree/treeItem';
import { TreeItemsStyled } from '@/components/tree/treeStyled';

import { Box, Flex } from '@/styles/flex';
import { variable } from '@/styles/variable';

export function ProjectFolder(): ReactElement | null {
    // CONTEXT
    const { t } = useTranslation();

    // VARIABLE
    const dataProjectFolder: ITreeItem[] = [
        {
            id: '1',
            name: 'project 1',
            node: [
                {
                    node: [
                        {
                            id: '111',
                            name: 'folder 111',
                            node: [
                                {
                                    node: [],
                                    id: '112',
                                    name: 'folder 112'
                                },
                                {
                                    node: [],
                                    id: '113',
                                    name: 'folder 113'
                                }
                            ]
                        }
                    ],
                    id: '11',
                    name: 'folder 11'
                },
                {
                    node: [],
                    id: '12',
                    name: 'folder 12'
                }
            ],
            type: 'project'
        },
        {
            id: '2',
            name: 'project 2',
            node: [
                {
                    node: [],
                    id: '21',
                    name: 'folder 21'
                }
            ],
            type: 'project'
        },
        {
            id: '3',
            name: 'project 3',
            node: [
                {
                    node: [],
                    id: '31',
                    name: 'folder 31'
                }
            ],
            type: 'project'
        }
    ];
    const initialFilter = useMemo(() => ({ search: t('no data found', { ns: 'glossary' }) }), []);

    // REF
    const inputIdRef = useRef<HTMLInputElement>(null);
    const inputValueRef = useRef<HTMLInputElement>(null);

    // STATE
    const [stateFilter, setStateFilter] = useState(initialFilter);
    const [stateProjectFolder, setStateProjectFolder] = useState(false);
    const [stateSearchInput, setStateSearchInput] = useState('');
    const [stateSelectedId, setStateSelectedId] = useState('');

    // CUSTOM HOOK
    // const { data: dataProjectFolder, isLoading } = useSWRGetFetch({
    //     apiParams: { ...stateFilter },
    //     apiUrl: apiUrlProjectFolder
    // });

    // Filter Debounce
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (stateSearchInput !== t('no data found', { ns: 'glossary' })) {
                setStateFilter(stateSearchInput ? { search: stateSearchInput } : initialFilter);
            }
        }, parseInt(variable.animation.timeout1s, 10));

        return (): void => {
            clearTimeout(timeout);
        };
    }, [initialFilter, stateSearchInput, t]);

    // FUNCTION
    const handleProjectFolder = ({ id, value }: { id: string; value: string }): void => {
        const { current: currentInputId } = inputIdRef;

        if (currentInputId) {
            currentInputId.value = id;
        }

        const { current: currentInputValue } = inputValueRef;

        if (currentInputValue) {
            currentInputValue.value = value;
        }

        setStateSelectedId(id);
    };

    const handleSearch = (value: string): void => {
        setStateSearchInput(value);
    };

    return dataProjectFolder ? (
        <>
            <input id="id-project-folder-id" name="project-folder-id" ref={inputIdRef} type="hidden" />

            {/* TODO: colocar input do nome */}

            <Flex flex="1 1 auto" flexDirection="column">
                {!stateProjectFolder ? (
                    <Box flex="1 0 auto">
                        <InputStyled
                            autoComplete="off"
                            id="id-project-folder"
                            maxLength={100}
                            name="project-folder"
                            onFocus={(): void => setStateProjectFolder(true)}
                            placeholder={capitalizeFirstLetter(t('select a project', { ns: 'glossary' }))}
                            pr={variable.space.spacingLG}
                            readOnly={true}
                            ref={inputValueRef}
                            type="text"
                        />

                        <Box position="absolute" right={variable.layout.inputPaddingX} top={variable.space.spacingSM}>
                            <SvgArrowDown height="8px" />
                        </Box>
                    </Box>
                ) : (
                    <Box flex="1 0 auto">
                        <InputStyled
                            autoComplete="off"
                            id="id-project-folder-search"
                            list="project-folder-search"
                            maxLength={100}
                            name="project-folder-search"
                            onChange={(e): void => handleSearch(e.currentTarget.value)}
                            placeholder={capitalizeFirstLetter(t('search for projects and folders', { ns: 'glossary' }))}
                            pr={variable.space.spacingLG}
                            type="text"
                        />

                        <Box position="absolute" right={variable.layout.inputPaddingX} top={variable.space.spacingSM}>
                            <SvgSearch height="14px" />
                        </Box>
                    </Box>
                )}
            </Flex>

            {stateProjectFolder ? (
                <ProjectFolderStyled>
                    <TreeItemsStyled>
                        {dataProjectFolder?.length > 0 ? (
                            dataProjectFolder.map(({ id, name, node, type }: ITreeItem) => {
                                return (
                                    <TreeItem
                                        cbFunction={handleProjectFolder}
                                        id={id}
                                        key={id}
                                        name={name}
                                        node={node}
                                        selectedId={stateSelectedId}
                                        type={type}
                                    >
                                        <Flex data-hidden-buttons="true" columnGap={variable.space.spacingXS}>
                                            <Button typeStyle="button-unset">
                                                <SvgPlusCircle height="16px" />
                                            </Button>

                                            <Button typeStyle="button-unset">
                                                <SvgPencil height="16px" />
                                            </Button>
                                        </Flex>
                                    </TreeItem>
                                );
                            })
                        ) : (
                            <li>{t('no data found', { ns: 'glossary' })}</li>
                        )}
                    </TreeItemsStyled>
                </ProjectFolderStyled>
            ) : null}
        </>
    ) : null;
}
