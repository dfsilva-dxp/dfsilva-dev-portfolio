'use client';

import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { Container } from '..';

export const HeaderContent = styled.header`
  ${({ theme }) => css`
    width: 100vw;
    padding: 2rem 1.6rem;
    background: transparent;
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
    color: ${theme.colors.white};
    text-transform: uppercase;
    font-weight: ${theme.font.weight.bold};
    mix-blend-mode: exclusion;
    transition: all 0.3s ease-in-out;
  `}
`;

export const Overlay = styled(motion.div)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    position: fixed;
    inset: 0;
    background: ${theme.colors.primary.dark};
    z-index: ${theme.layers.overlay};

    & ${Container} > .motion-container > div {
      height: 100vh;
    }
  `}
`;

export const MobileLinks = styled.nav`
  ${({ theme }) => css`
    font-size: 1.8rem;
    font-weight: ${theme.font.weight.bold};
    display: block;

    .title {
      font-size: 13rem;
      text-transform: uppercase;
      color: ${theme.colors.gray[700]};
    }

    @media (min-width: 768px) {
      display: none;
    }
  `}
`;

export const LinkItem = styled.span`
  ${({ theme }) => css`
    padding: 0.5rem 0;
    transition: color 0.15s ease-in;

    .line-number {
      color: ${theme.colors.gray[700]};
    }

    .label {
      color: ${theme.colors.gray[400]};
    }

    &:hover .label {
      color: ${theme.colors.white};
    }

    &:hover .line-number {
      color: ${theme.colors.primary.main};
    }
  `}
`;
