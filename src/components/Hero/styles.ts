'use client';

import styled, { css } from 'styled-components';
import { FlexComponent } from '../Flex';

export const HeroContent = styled.section`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    font-size: 10vw;
    border-bottom: 1px solid ${theme.colors.gray[100]};

    display: grid;
    grid-template-rows: repeat(2, 1fr);

    @media (min-width: 992px) {
      height: 90vh;

      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto;
    }
  `}
`;

export const FirstColumn = styled(FlexComponent)`
  padding: 3.2rem 1.5rem;

  @media (min-width: 992px) {
    padding: 6rem;
  }
`;

export const HeroMessage = styled.h1`
  ${({ theme }) => css`
    font-size: 1em;
    line-height: 90%;

    strong {
      background: ${theme.colors.gradient.base};
      background: ${theme.colors.gradient.linear};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    @media (min-width: 992px) {
      font-size: ${theme.font.sizes.huge};
    }
  `}
`;

export const HeroName = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    line-height: 1;
    font-weight: 500;
    text-transform: uppercase;
  `}
`;

export const LastColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    'react react react react'
    'next next next next'
    'node node node node';

  @media (min-width: 992px) {
    grid-template-rows: repeat(2, 1fr) 9.2rem;
    grid-template-areas:
      'react react next next'
      'react react node node'
      'social-icons social-icons social-icons social-icons';
  }
`;

export const HeroSocialWrapper = styled.div`
  display: none;

  @media (min-width: 992px) {
    width: 100%;
    display: initial;
    grid-area: social-icons;

    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: 'in lk gh tw';
  }
`;
