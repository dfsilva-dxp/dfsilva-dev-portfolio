import styled, { css } from 'styled-components';

export const SplitWrapper = styled.div`
  width: fit-content;
  height: 2em;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const SplitChildren = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray[200]};
    font-size: 2em;
    line-height: 1;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
