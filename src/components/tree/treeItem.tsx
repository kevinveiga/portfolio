import React, { ReactElement, useState } from 'react';

import { useTheme } from 'styled-components';

import { ITreeItem } from '@/interface';

import { Button } from '@/components/button/button';
import { TreeItems } from '@/components/tree/treeItems';
import { TreeItemStyled, TreeItemBtnsStyled } from '@/components/tree/treeStyled';
import { SvgArrowTriangle, SvgClipboard, SvgFolder } from '@/components/svg/svgStore';

import { Spacer } from '@/styles/layout';
import { Span } from '@/styles/text';
import { variable } from '@/styles/variable';

export function TreeItem({ cbFunction, children, id, name, node, selectedId, type }: ITreeItem): ReactElement {
    // CONTEXT
    const { bgColor, svgColor } = useTheme();

    // VARIABLE
    const childNode: ITreeItem[] = node || [];
    const hasChild = childNode.length > 0;

    // STATE
    const [stateVisible, setStateVisible] = useState(false);

    // FUNCTION
    const handleOnClick = (): void => {
        if (cbFunction) {
            cbFunction({ id: id, value: name });
        }

        setStateVisible((prevState) => !prevState);
    };

    return (
        <TreeItemStyled active={stateVisible}>
            <TreeItemBtnsStyled>
                <Button active={selectedId === id} onClick={(): void => handleOnClick()} typeStyle="button-unset">
                    {hasChild ? (
                        <>
                            <SvgArrowTriangle data-svg-arrow-triangle="true" fill={svgColor.tertiary} height="6px" />

                            <Spacer width={variable.space.spacingXS} />
                        </>
                    ) : (
                        <Spacer width={variable.space.spacingSM} />
                    )}

                    {type === 'project' ? (
                        <SvgClipboard height="16px" />
                    ) : (
                        <SvgFolder fill={bgColor.primary} height="16px" stroke={svgColor.secondary} />
                    )}

                    <Spacer width={variable.space.spacingXS} />

                    <Span>{name}</Span>
                </Button>

                <Spacer width={variable.space.spacingMD} />

                {children}
            </TreeItemBtnsStyled>

            <Spacer height={variable.space.spacingXXS} />

            {hasChild && stateVisible ? (
                <TreeItems cbFunction={cbFunction} data={childNode} selectedId={selectedId}>
                    {children}
                </TreeItems>
            ) : null}
        </TreeItemStyled>
    );
}
