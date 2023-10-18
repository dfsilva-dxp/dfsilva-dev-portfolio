import styled, { css } from 'styled-components';

import { FlexComponent } from '@/components/Flex';

import { SplitChildren, SplitWrapper } from '@/components/Split/styles';

export const BoxWrapper = styled(FlexComponent)`
  ${({ theme }) => css`
    width: 100%;
    height: 200px;
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.gray[50]};
    color: ${theme.colors.gray[200]};
  `}
`;

export const BoxSplitWrapper = styled(SplitWrapper)``;

export const BoxSplitChildren = styled(SplitChildren)`
  ${({ theme }) => css`
    &:last-child {
      color: ${theme.colors.white};
    }
  `}
`;
