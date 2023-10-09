import { Dispatch, SetStateAction } from 'react';
import { motion } from 'framer-motion';

import { CodeLine, Flex } from '@/components';
import HelloWorld from '@/components/HelloWorld';

import * as S from './styles';

import { container, item } from './motion-config';

interface ILoaderProps {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const Loader = ({ setLoading }: ILoaderProps) => {
  return (
    <S.LoaderContent>
      <Flex align="center" justify="center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          onAnimationComplete={() => setLoading(false)}
        >
          <motion.div variants={item}>
            <CodeLine lineNumber="01">
              <HelloWorld />
            </CodeLine>
          </motion.div>
        </motion.div>
      </Flex>
    </S.LoaderContent>
  );
};

export default Loader;
