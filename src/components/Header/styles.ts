'use client';

import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { Container } from '..';

export const HeaderContent = styled.header`
  ${({ theme }) => css`
    width: 100vw;
    padding: 2rem 1.6rem;
    position: fixed;
    top: 0;
    z-index: ${theme.layers.menu};

    @media (min-width: 576px) {
      padding: 2rem 6rem;
    }
  `}
`;

export const ToggleButton = styled.button`
  ${({ theme }) => css`
    background: none;
    border: none;
    box-shadow: none;
    font-size: ${theme.font.sizes.small};
    text-transform: uppercase;
    font-weight: ${theme.font.weight.bold};
    transition: all 0.3s ease-in-out;
  `}
`;

export const Overlay = styled(motion.div)`
  ${({ theme }) => css`
    width: 100vw;
    color: ${theme.colors.white};
    position: fixed;
    inset: 0;
    background: ${theme.colors.white};
    z-index: ${theme.layers.overlay};

    & ${Container} > .motion-container > div {
      height: 100vh;
    }
  `}
`;
