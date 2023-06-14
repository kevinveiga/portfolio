import styled, { IActiveStyled } from 'styled-components';

import { variable } from '@/styles/variable';

export const FavoriteStyled = styled.button<IActiveStyled>`
    &:hover {
        svg {
            [data-svg-star='true'] {
                fill: ${variable.color.primary};
            }

            [data-svg-star-border='true'] {
                fill: ${variable.color.primary};
            }
        }
    }

    svg {
        [data-svg-star='true'] {
            fill: ${({ active }): string => (active ? variable.color.yellow : 'transparent')};
        }

        [data-svg-star-border='true'] {
            fill: ${({ active, theme }): string => (active ? variable.color.yellow : theme.svgColor.primary)};
        }
    }
`;
