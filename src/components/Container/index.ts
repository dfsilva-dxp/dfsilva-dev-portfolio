'use client';

import styled, { css } from 'styled-components';

const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding-right: 1.6rem;
    padding-left: 1.6rem;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 576px) {
      max-width: ${theme.grid.sm};
    }
    @media (min-width: 768px) {
      max-width: ${theme.grid.md};
    }
    @media (min-width: 992px) {
      max-width: ${theme.grid.lg};
    }
    @media (min-width: 1200px) {
      max-width: ${theme.grid.xlg};
    }
    @media (min-width: 1400px) {
      max-width: ${theme.grid.xxlg};
    }
  `}
`;

export default Container;
