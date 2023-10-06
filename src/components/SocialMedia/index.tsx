import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo
} from 'phosphor-react';

import { Flex } from '@/components';

import * as S from './styles';

interface ISocialMedia {
  direction?: 'row' | 'column';
  color?: 'dark' | 'light';
}

const SocialMedia = ({
  direction = 'column',
  color = 'light'
}: ISocialMedia) => {
  return (
    <S.SocialMediaContent color={color}>
      <Flex align="center" gap="1rem" direction={direction}>
        <Flex align="center" gap="1rem" direction={direction}>
          <a
            href="https://github.com/dfsilvadev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubLogo size={18} weight="bold" />
          </a>

          <a
            href="https://www.instagram.com/dfsilva.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramLogo size={18} weight="bold" />
          </a>

          <a
            href="https://www.linkedin.com/in/dfsilva-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinLogo size={18} weight="bold" />
          </a>

          <a
            href="https://twitter.com/dfsilvadev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterLogo size={18} weight="bold" />
          </a>
        </Flex>
        <p>siga-me nas redes sociais</p>
      </Flex>
    </S.SocialMediaContent>
  );
};

export default SocialMedia;
