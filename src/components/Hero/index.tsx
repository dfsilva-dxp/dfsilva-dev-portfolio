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
      <S.FirstColumn align="flex-end">
        <Flex direction="column" gap="4.5rem">
          <S.HeroMessage>
            <Flex direction="column">
              <span>
                <strong>Desenvolver</strong> se
              </span>
              <span>tornou um hobby</span>
              <span>favorito.</span>
            </Flex>
          </S.HeroMessage>

          <Flex align="center" gap="1rem">
            <Image
              src="images/svg/logo.svg"
              alt="Logo Daniel Silva"
              width={36}
              height={36}
              priority
            />

            <S.HeroName>
              <Flex direction="column">
                <span>Daniel Silva</span>
                <span>Sênior Frontend Developer</span>
              </Flex>
            </S.HeroName>
          </Flex>
        </Flex>
      </S.FirstColumn>
      <S.LastColumn>
        <Box
          splitChildren="React"
          area="react"
          borderBt="top"
          borderLr="left"
          icon={
            <Image
              src="images/svg/icons/react_icon.svg"
              alt="React logo"
              width={24}
              height={24}
              priority
            />
          }
        >
          React
        </Box>

        <Box
          splitChildren="Next"
          area="next"
          borderBt="top"
          borderLr="left"
          icon={
            <Image
              src="images/svg/icons/next_icon.svg"
              alt="Next logo"
              width={24}
              height={24}
              priority
            />
          }
        >
          Next
        </Box>

        <Box
          splitChildren="Node"
          area="node"
          borderBt="top"
          borderLr="left"
          icon={
            <Image
              src="images/svg/icons/node_icon.svg"
              alt="Node logo"
              width={24}
              height={24}
              priority
            />
          }
        >
          Node
        </Box>

        <S.HeroSocialWrapper>
          <Box
            splitChildren={<InstagramLogo size={24} />}
            contentAlign="center"
            justifySplit="center"
            area="in"
            borderBt="top"
            borderLr="left"
          >
            <InstagramLogo size={24} />
          </Box>
          <Box
            splitChildren={<LinkedinLogo size={24} />}
            contentAlign="center"
            justifySplit="center"
            area="lk"
            borderBt="top"
            borderLr="left"
          >
            <LinkedinLogo size={24} />
          </Box>
          <Box
            splitChildren={<GithubLogo size={24} />}
            contentAlign="center"
            justifySplit="center"
            area="gh"
            borderBt="top"
            borderLr="left"
          >
            <GithubLogo size={24} />
          </Box>
          <Box
            splitChildren={<TwitterLogo size={24} />}
            contentAlign="center"
            justifySplit="center"
            area="tw"
            borderBt="top"
            borderLr="left"
          >
            <TwitterLogo size={24} />
          </Box>
        </S.HeroSocialWrapper>
      </S.LastColumn>
    </S.HeroContent>
  );
};

export default Hero;
