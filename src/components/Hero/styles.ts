'use client';

import styled, { css } from 'styled-components';

import { Container } from '@/components';

export const SocialMediaContent = styled.span`
  ${({ theme }) => css`
    display: none;
    position: absolute;
    right: 6rem;
    top: 50%;
    transform: translate(-50%, -50%);

    p {
      writing-mode: vertical-rl;
      transform: rotate(180deg);
      font-weight: ${theme.font.weight.semibold};
    }

    & a {
      transition: color 0.15s ease-out;

      &:hover {
        color: ${theme.colors.green.main};
      }
    }

    @media (min-width: 768px) {
      display: initial;
    }
  `}
`;

export const HeroContent = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.gray[50]} url(/images/webp/background-md.webp)
      right top/contain no-repeat fixed;
    width: 100vw;
    height: 100vh;
    position: relative;

    ${Container} .motion-container > div {
      height: 100vh;
      padding-top: 6rem;
      padding-bottom: 6rem;
    }

    @media (min-width: 1200px) {
      background: ${theme.colors.gray[50]} url(/images/webp/background-lg.webp)
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
    font-size: ${theme.font.sizes.medium};
    text-transform: uppercase;
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
