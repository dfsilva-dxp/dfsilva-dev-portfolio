import styled, { css } from 'styled-components';

export const ConsoleElement = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.purple[500]};
  `}
`;

export const DotElement = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`;

export const LogElement = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.green.main};
  `}
`;

export const ElementOpensParenthesis = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.purple[700]};
  `}
`;

export const ElementClosesParenthesis = styled(ElementOpensParenthesis)``;

export const StringElement = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.yellow.main};
  `}
`;

export const SemicolonElement = styled(DotElement)``;
