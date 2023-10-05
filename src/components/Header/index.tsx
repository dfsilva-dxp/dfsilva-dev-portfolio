import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { Container, Flex } from '@/components';

import * as S from './styles';

const menuVars = {
  initial: {
    scaleY: 0
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0]
    }
  },
  exit: {
    scaleY: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
const containerVars = {
  initial: {
    opacity: 0,
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1
    }
  },
  open: {
    opacity: 1,
    transition: {
      ease: [0.12, 0, 0.39, 0],
      duration: 0.5,
      staggerDirection: -1,
      delay: 0.5
    }
  }
};

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setTimeout(() => setIsActive((current) => !current), 500);
  };

  return (
    <>
      <S.HeaderContent>
        <Flex align="center" justify="flex-end">
          <S.ToggleButton type="button" onClick={toggleMenu}>
            {isActive ? 'Voltar' : 'Navegue'}
          </S.ToggleButton>
        </Flex>
      </S.HeaderContent>
      <AnimatePresence>
        {isActive && (
          <S.Overlay
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Container>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="motion-container"
              >
                <Flex align="center">
                  <S.MobileLinks>
                    <Flex direction="column" gap="3.8rem">
                      <strong className="title">Menu</strong>

                      <Flex direction="column">
                        <S.LinkItem>
                          <Flex align="center" gap="1.6rem">
                            <span className="line-number">00</span>
                            <span className="label">Home</span>
                          </Flex>
                        </S.LinkItem>

                        <S.LinkItem>
                          <Flex align="center" gap="1.6rem">
                            <span className="line-number">01</span>
                            <span className="label">Portfólio</span>
                          </Flex>
                        </S.LinkItem>

                        <S.LinkItem>
                          <Flex align="center" gap="1.6rem">
                            <span className="line-number">02</span>
                            <span className="label">Conhecimentos</span>
                          </Flex>
                        </S.LinkItem>

                        <S.LinkItem>
                          <Flex align="center" gap="1.6rem">
                            <span className="line-number">03</span>
                            <span className="label">Vamos Conversar?</span>
                          </Flex>
                        </S.LinkItem>
                      </Flex>
                    </Flex>
                  </S.MobileLinks>
                </Flex>
              </motion.div>
            </Container>
          </S.Overlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
