'use client';

import { StyleSheetManager } from 'styled-components';
import isValidProp from '@emotion/is-prop-valid';
import Image from 'next/image';

import { Flex } from '@/components';

import * as S from './styles';

const Header = () => {
  return (
    <S.HeaderContent>
      <StyleSheetManager
        shouldForwardProp={(propName) => isValidProp(propName)}
      >
        <Flex align="center" justify="space-between">
          <Image
            src="/images/logo.svg"
            alt="Logotipo Daniel Silva • Sênior Front-End Developer"
            title="Logotipo Daniel Silva • Sênior Front-End Developer"
            aria-label="Logotipo dfsilva"
            width={36}
            height={36}
            priority
          />
        </Flex>
      </StyleSheetManager>
    </S.HeaderContent>
  );
};

export default Header;
