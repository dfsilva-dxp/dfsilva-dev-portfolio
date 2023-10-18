import Image from 'next/image';
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo
} from 'phosphor-react';

import { Box, Flex } from '@/components';

import * as S from './styles';

const Hero = () => {
  return (
    <S.HeroContent>
      <S.GridLeft direction="column" justify="flex-end" gap="4.5rem">
        <S.HeroMessage>
          <Flex direction="column">
            <span>
              <strong>Desenvolver</strong> se
            </span>
            <span>tornou um hobby</span>
            <span>favorito.</span>
          </Flex>
        </S.HeroMessage>

        <Flex align="center" justify="center" gap="1rem">
          <Image
            src="images/svg/logo.svg"
            alt="Logo Daniel Silva"
            width={36}
            height={36}
            priority
          />

          <S.HeroInfo>
            <Flex direction="column" justify="center">
              <span>Daniel Silva</span>
              <span>Sênior Frontend Developer</span>
            </Flex>
          </S.HeroInfo>
        </Flex>
      </S.GridLeft>

      <S.GridRight>
        <Box
          firstChild="React"
          lastChild="React"
          area="react"
          borderLeftAndRight="left"
          borderTopAndBottom="bottom"
          icon={
            <Image
              src="images/svg/icons/react_icon.svg"
              alt="React logo"
              width={24}
              height={24}
              priority
            />
          }
        />
        <Box
          firstChild="Next"
          lastChild="Next"
          area="next"
          borderLeftAndRight="left/right"
          borderTopAndBottom="bottom"
          icon={
            <Image
              src="images/svg/icons/next_icon.svg"
              alt="Next logo"
              width={24}
              height={24}
              priority
            />
          }
        />
        <Box
          firstChild="Node"
          lastChild="Node"
          borderLeftAndRight="left/right"
          borderTopAndBottom="bottom"
          area="node"
          icon={
            <Image
              src="images/svg/icons/node_icon.svg"
              alt="Node logo"
              width={24}
              height={24}
              priority
            />
          }
        />

        <S.HeroSocialIcons>
          <Box
            firstChild={<InstagramLogo size={24} />}
            lastChild={<InstagramLogo size={24} />}
            alignWrapper="center"
            justifyChildren="center"
            borderLeftAndRight="left"
            borderTopAndBottom="bottom"
            area="in"
          />
          <Box
            firstChild={<LinkedinLogo size={24} />}
            lastChild={<LinkedinLogo size={24} />}
            alignWrapper="center"
            justifyChildren="center"
            borderLeftAndRight="left"
            borderTopAndBottom="bottom"
            area="lk"
          />
          <Box
            firstChild={<GithubLogo size={24} />}
            lastChild={<GithubLogo size={24} />}
            alignWrapper="center"
            justifyChildren="center"
            borderLeftAndRight="left"
            borderTopAndBottom="bottom"
            area="gh"
          />
          <Box
            firstChild={<TwitterLogo size={24} />}
            lastChild={<TwitterLogo size={24} />}
            alignWrapper="center"
            justifyChildren="center"
            borderLeftAndRight="left"
            borderTopAndBottom="bottom"
            area="tw"
          />
        </S.HeroSocialIcons>
      </S.GridRight>
    </S.HeroContent>
  );
};

export default Hero;
