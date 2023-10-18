import styled, { DefaultTheme, css } from 'styled-components';

import { FlexComponent } from '@/components/Flex';

import { SplitChildren, SplitWrapper } from '@/components/Split/styles';

import { BorderType } from '.';

const variantTopAndBottom = {
  top: (theme: DefaultTheme) => css`
    border-top: 1px solid ${theme.colors.gray[100]};
  `,
  bottom: (theme: DefaultTheme) => css`
    border-bottom: 1px solid ${theme.colors.gray[100]};
  `,
  'top/bottom': (theme: DefaultTheme) => css`
    border-top: 1px solid ${theme.colors.gray[100]};
    border-bottom: 1px solid ${theme.colors.gray[100]};
  `
};

const variantLeftAndRight = {
  left: (theme: DefaultTheme) => css`
    border-left: 1px solid ${theme.colors.gray[100]};
  `,
  right: (theme: DefaultTheme) => css`
    border-right: 1px solid ${theme.colors.gray[100]};
  `,
  'left/right': (theme: DefaultTheme) => css`
    border-left: 1px solid ${theme.colors.gray[100]};
    border-right: 1px solid ${theme.colors.gray[100]};
  `
};

export const BoxContent = styled(FlexComponent)<BorderType>`
  ${({ theme, borderLeftAndRight, borderTopAndBottom }) => css`
    width: 100%;
    background-color: ${theme.colors.white};
    color: ${theme.colors.gray[200]};

    ${!!borderLeftAndRight && variantLeftAndRight[borderLeftAndRight](theme)};
    ${!!borderTopAndBottom && variantTopAndBottom[borderTopAndBottom](theme)}
  `}
`;

export const BoxSplitContent = styled(SplitWrapper)``;

export const BoxSplitChildren = styled(SplitChildren)`
  ${({ theme }) => css`
    &:last-child {
      color: ${theme.colors.white};
    }
  `}
`;
