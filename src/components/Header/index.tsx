import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { Container, Flex } from '@/components';

import * as S from './styles';
import {
  content,
  fullscreen,
  header,
  navButtonAnimation
} from './motion-config';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setTimeout(() => setIsActive((current) => !current), 300);
  };

  return (
    <>
      <motion.div
        variants={header}
        initial="initial"
        animate="animate"
        className="motion-container"
      >
        <S.HeaderContent>
          <Flex align="center" justify="flex-end">
            <motion.div variants={navButtonAnimation}>
              <S.ToggleButton type="button" onClick={toggleMenu}>
                {isActive ? 'Voltar' : 'Navegue'}
              </S.ToggleButton>
            </motion.div>
          </Flex>
        </S.HeaderContent>
      </motion.div>

      <AnimatePresence>
        {isActive && (
          <S.Overlay
            variants={fullscreen}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Container>
              <motion.div
                variants={content}
                initial="initial"
                animate="open"
                exit="initial"
                className="motion-container"
              >
                <Flex align="center" justify="center">
                  <Flex direction="column" gap="1.6rem">
                    <strong>Menu</strong>
                  </Flex>
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
