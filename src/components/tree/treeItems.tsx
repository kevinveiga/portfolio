import React, { ReactElement, ReactNode } from 'react';

import { ITreeItem } from '@/interface';

import { TreeItem } from '@/components/tree/treeItem';
import { TreeItemsStyled } from '@/components/tree/treeStyled';

export function TreeItems({
    cbFunction,
    children,
    data,
    selectedId
}: {
    cbFunction?: ({ id, value }: { id: string; value: string }) => void;
    data?: ITreeItem[];
    children?: ReactNode;
    selectedId?: string;
}): ReactElement {
    return (
        <TreeItemsStyled>
            {data && data.length > 0
                ? data.map(({ id, name, node, type }: ITreeItem) => {
                      return (
                          <TreeItem cbFunction={cbFunction} id={id} key={id} name={name} node={node} selectedId={selectedId} type={type}>
                              {children}
                          </TreeItem>
                      );
                  })
                : null}
        </TreeItemsStyled>
    );
}
