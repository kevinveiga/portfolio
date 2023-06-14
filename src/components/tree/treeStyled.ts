import styled, { IActiveStyled, IStyledSystem } from 'styled-components';

import { variable } from '@/styles/variable';

export const TreeItemStyled = styled.li<IActiveStyled>`
    button {
        align-items: center;
        display: flex;
        text-align: left;

        > svg {
            vertical-align: middle;
            width: 16px;
        }

        [data-svg-arrow-triangle='true'] {
            transform: ${({ active }): string => (active ? 'rotate(0deg)' : 'rotate(-90deg)')};
            transform-origin: 50% 50%;
            transition: fill ${variable.animation.transition}, transform ${variable.animation.transition};
        }
    }
`;

export const TreeItemBtnsStyled = styled.div`
    display: flex;

    [data-hidden-buttons='true'] {
        opacity: 0;
        transition: opacity ${variable.animation.transition};
    }

    &:hover {
        [data-hidden-buttons='true'] {
            opacity: 1;
        }
    }
`;

export const TreeItemsStyled = styled.ul<IStyledSystem>`
    display: flex;
    flex-direction: column;

    > li {
        padding-left: ${variable.space.spacingSM};
    }
`;
