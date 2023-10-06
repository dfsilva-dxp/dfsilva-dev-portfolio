import styled, { css } from 'styled-components';

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
