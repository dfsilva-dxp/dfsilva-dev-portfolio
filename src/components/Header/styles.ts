'use client';

import styled, { css } from 'styled-components';

export const HeaderContent = styled.header`
  ${({ theme }) => css`
    width: 100vw;
    padding: 2rem 6rem;
    background: transparent;
    position: fixed;
    top: 0;
    z-index: ${theme.layers.base};
  `}
`;
