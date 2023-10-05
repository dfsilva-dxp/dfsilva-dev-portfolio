'use client';

import styled, { css } from 'styled-components';

import { FlexType } from '.';

export const FlexContent = styled.div<FlexType>`
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
