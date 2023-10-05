'use client';

import styled, { css } from 'styled-components';

import { ITagProps } from '.';

export const TagContent = styled.div<Pick<ITagProps, 'align'>>`
  ${({ theme, align }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray[200]};
    text-align: ${align};
    font-weight: ${theme.font.weight.semibold};
  `}
`;
