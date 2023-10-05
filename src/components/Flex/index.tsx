import { ReactNode } from 'react';
import { StyleSheetManager } from 'styled-components';
import isValidProp from '@emotion/is-prop-valid';

import * as S from './styles';

export type FlexType = {
  display?: 'none' | 'inline-flex' | 'flex';
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  content?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?:
    | '0'
    | '0.4rem'
    | '0.8rem'
    | '1rem'
    | '1.6rem'
    | '2rem'
    | '2.4rem'
    | '2.8rem'
    | '3rem'
    | '3.2rem'
    | '3.4rem'
    | '3.8rem'
    | '4.5rem'
    | '6rem';
};

interface IFlexProps extends FlexType {
  children: ReactNode;
}

const Flex = ({
  children,
  display = 'flex',
  direction = 'row',
  align = 'flex-start',
  justify = 'flex-start',
  content = 'stretch',
  wrap = 'wrap',
  gap = '0'
}: IFlexProps) => {
  return (
    <StyleSheetManager shouldForwardProp={(propName) => isValidProp(propName)}>
      <S.FlexContent
        display={display}
        direction={direction}
        align={align}
        justify={justify}
        content={content}
        wrap={wrap}
        gap={gap}
      >
        {children}
      </S.FlexContent>
    </StyleSheetManager>
  );
};

export default Flex;
