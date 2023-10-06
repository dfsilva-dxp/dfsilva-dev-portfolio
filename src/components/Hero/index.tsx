import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo
} from 'phosphor-react';

import { Container, Flex, Tag } from '@/components';

import * as S from './styles';

import { hero, letterAnimation } from './motion-config';

const Hero = () => {
  return (
    <S.HeroContent>
      <Container>
        <motion.div
          variants={hero}
          initial="initial"
          animate="animate"
          className="motion-container"
        >
          <S.SocialMediaContent>
            <Flex align="center" gap="1rem" direction="column">
              <Flex align="center" gap="1rem" direction="column">
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

          <Flex direction="column" justify="flex-end" gap="3.8rem">
            <motion.div variants={letterAnimation}>
              <Flex direction="column" align="stretch" gap="1rem">
                <Tag value="h1" />

                <S.HeroInfo>
                  <Flex direction="column">
                    <span>
                      <span className="highlight-word">Desenvolver</span> se
                    </span>
                    <span>tornou um hobby</span>
                    <span>favorito.</span>
                  </Flex>
                </S.HeroInfo>

                <Tag value="/h1" align="right" />
              </Flex>
            </motion.div>

            <motion.div variants={letterAnimation}>
              <Flex align="center" gap="6rem">
                <Flex gap="1rem" align="center">
                  <Image
                    src="/images/svg/logo.svg"
                    alt="Logotipo Daniel Silva • Sênior Front-End Developer"
                    title="Logotipo Daniel Silva • Sênior Front-End Developer"
                    aria-label="Logotipo dfsilva"
                    width={36}
                    height={36}
                    priority
                  />

                  <S.BottomTitle>
                    <Flex direction="column">
                      <span>Daniel Silva</span>
                      <span>Sênior Frontend Developer</span>
                    </Flex>
                  </S.BottomTitle>
                </Flex>

                <S.Technologies>
                  <Flex gap="6rem">
                    <span>React</span>
                    <span>Next</span>
                    <span>Node</span>
                  </Flex>
                </S.Technologies>
              </Flex>
            </motion.div>
          </Flex>
        </motion.div>
      </Container>
    </S.HeroContent>
  );
};

export default Hero;
