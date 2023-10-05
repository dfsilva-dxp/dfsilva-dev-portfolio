import Image from 'next/image';
import { motion } from 'framer-motion';

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
          <Flex direction="column" justify="flex-end" gap="3.8rem">
            <motion.div variants={letterAnimation}>
              <Flex direction="column" align="stretch" gap="1rem">
                <Tag value="span" />

                <S.HeroInfo>
                  <Flex direction="column">
                    <span>
                      <span className="highlight-word">Desenvolver</span> se
                    </span>
                    <span>tornou um hobby</span>
                    <span>favorito.</span>
                  </Flex>
                </S.HeroInfo>

                <Tag value="/span" align="right" />
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
