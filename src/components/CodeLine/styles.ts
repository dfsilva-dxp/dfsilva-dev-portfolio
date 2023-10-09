import styled, { css } from 'styled-components';

export const CodeLineContent = styled.div`
  ${({ theme }) => css`
    width: fit-content;
    height: 3.2rem;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weight.semibold};
    line-height: 1;

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const CodeLineNumber = styled.span`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary.main};
    padding: 0.8rem;
    border-radius: 0.4rem 0 0 0.4rem;
    color: ${theme.colors.gray[700]};

    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const CodeLineScript = styled.span`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray[800]};
    border-radius: 0 0.4rem 0.4rem 0;

    display: flex;
    padding: 0.8rem;
    justify-content: center;
    align-items: center;
  `}
`;
