'use client';

import styled, { css } from 'styled-components';

import { Container } from '@/components';

export const HeroContent = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.primary.dark} url(/images/svg/bg-mobile.svg)
      right top/contain no-repeat fixed;
    width: 100vw;
    height: 100vh;
    color: ${theme.colors.white};
    position: relative;

    ${Container} .motion-container > div {
      height: 100vh;
      padding-top: 6rem;
      padding-bottom: 6rem;
    }

    @media (min-width: 1200px) {
      background: ${theme.colors.primary.dark} url(/images/svg/bg-desktop.svg)
        right top/contain no-repeat fixed;
    }
  `}
`;

export const HeroInfo = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    text-transform: uppercase;
    line-height: 90%;
    font-weight: ${theme.font.weight.bold};

    .highlight-word {
      color: ${theme.colors.primary.main};
    }

    @media (min-width: 576px) {
      font-size: 5.4rem;
    }

    @media (min-width: 768px) {
      font-size: ${theme.font.sizes.xxlarge};
    }
  `}
`;

export const BottomTitle = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `}
`;

export const Technologies = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weight.semibold};
    color: ${theme.colors.gray[400]};
    display: none;

    @media (min-width: 768px) {
      display: initial;
    }
  `}
`;
