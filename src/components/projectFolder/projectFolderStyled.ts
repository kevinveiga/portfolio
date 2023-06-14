import styled, { IStyledSystem } from 'styled-components';

import { variable } from '@/styles/variable';

export const ProjectFolderStyled = styled.div<IStyledSystem>`
    background-color: ${({ theme }): string => theme.bgColor.tertiary};
    display: flex;
    padding-bottom: ${variable.space.spacingSM};
    padding-top: ${variable.space.spacingSM};
`;
