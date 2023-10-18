import styled, { css } from 'styled-components';

export const SplitWrapper = styled.div`
  width: fit-content;
  height: 3rem;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const SplitChildren = styled.span`
  ${({ theme }) => css`
    padding: 0.5rem 0;
    color: ${theme.colors.gray[200]};
    font-size: ${theme.font.sizes.xlarge};
    line-height: 1;

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
