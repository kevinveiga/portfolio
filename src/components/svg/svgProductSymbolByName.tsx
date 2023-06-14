import React, { ReactElement } from 'react';

import { IProductSvg } from '@/interface';

import { SvgProductDefaultSymbol } from '@/components/svg/svgProdutcStore';

export function ProductSvgSymbolByName({ productName, ...props }: IProductSvg): ReactElement | null {
    switch (productName) {
        default:
            return <SvgProductDefaultSymbol {...props} />;
    }
}
