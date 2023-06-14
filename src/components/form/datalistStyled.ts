import styled, { IActiveStyled } from 'styled-components';

import { variable } from '@/styles/variable';

export const DatalistStyled = styled.ul<IActiveStyled>`
    background-color: ${({ theme }): string => theme.bgColor.secondary};
    box-shadow: ${variable.layout.boxShadowPrimary};
    display: ${({ active }): string => (active ? 'block' : 'none')};
    height: auto;
    max-height: 50vh;
    min-height: 40px;
    overflow-y: auto;
    position: absolute;
    width: 100%;
    z-index: ${({ zIndex }): number => zIndex || 3};

    > li {
        display: flex;
        flex-direction: column;
        padding: 10px 15px;

        button,
        span {
            color: ${({ theme }): string => theme.textColor.secondary};
            font-weight: 700;
            text-align: left;
        }

        svg {
            height: 30px;
            fill: ${({ theme }): string => theme.textColor.secondary};
            margin-right: 15px;
            max-width: 26px;
        }
    }
`;
