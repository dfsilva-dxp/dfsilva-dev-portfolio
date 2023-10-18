import styled, { css } from 'styled-components';

import { FlexComponent } from '@/components/Flex';

export const HeroContent = styled.section`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    'gird-left'
    'grid-right';

  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-template-areas: 'gird-left grid-right';
  }
`;

export const GridLeft = styled(FlexComponent)`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    padding: 3.2rem 1.5rem;
    border-bottom: 1px solid ${theme.colors.gray[100]};

    @media (min-width: 992px) {
      padding: 6rem;

      & > h1 {
        font-size: 6em;
      }
    }
  `}
`;

export const GridRight = styled.div`
  padding: 0;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    'react react react react'
    'next next next next'
    'node node node node';

  @media (min-width: 992px) {
    padding: 0 6rem;

    grid-template-rows: repeat(2, 1fr) 9.2rem;
    grid-template-areas:
      'react react next next'
      'react react node node'
      'social-icons social-icons social-icons social-icons';
  }
`;

export const HeroMessage = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    line-height: 90%;

    strong {
      background: ${theme.colors.gradient.base};
      background: ${theme.colors.gradient.linear};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `}
`;

export const HeroInfo = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.weight.bold};
  `}
`;

export const HeroSocialIcons = styled.div`
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
