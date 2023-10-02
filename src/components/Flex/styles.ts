'use client';

import styled, { css } from 'styled-components';

import { IFlexProps } from '.';

type FlexContentType = {
  gap:
    | '0'
    | '0.4rem'
    | '0.8rem'
    | '1rem'
    | '1.6rem'
    | '2rem'
    | '2.4rem'
    | '2.8rem'
    | '3rem'
    | '3.2rem'
    | '3.4rem'
    | '3.8rem';
} & Omit<IFlexProps, 'children' | 'gap'>;

export const FlexContent = styled.div<FlexContentType>`
  ${({ display, direction, align, justify, content, wrap, gap }) => css`
    display: ${display};
    flex-direction: ${direction};
    align-items: ${align};
    align-content: ${content};
    justify-content: ${justify};
    flex-wrap: ${wrap};
    gap: ${gap};
  `}
`;
