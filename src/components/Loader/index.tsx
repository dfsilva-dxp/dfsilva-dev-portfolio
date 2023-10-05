import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Flex } from '..';

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
            <Image
              src="/images/svg/line-code.svg"
              alt="Logotipo Daniel Silva • Sênior Front-End Developer"
              title="Logotipo Daniel Silva • Sênior Front-End Developer"
              aria-label="Logotipo dfsilva"
              width={259.18}
              height={31}
              priority
            />
          </motion.div>
        </motion.div>
      </Flex>
    </S.LoaderContent>
  );
};

export default Loader;
