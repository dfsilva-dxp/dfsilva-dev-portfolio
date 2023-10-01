import { ReactNode } from 'react';

import * as S from './styles';

const Flex = ({
  children,
  display = 'flex',
  direction = 'row',
  align = 'flex-start',
  justify = 'flex-start',
  content = 'stretch',
  wrap = 'wrap',
  gap = '$0'
}: IFlexProps) => {
  const selectedGap = EGap[gap];

  return (
    <S.FlexContent
      display={display}
      direction={direction}
      align={align}
      justify={justify}
      content={content}
      wrap={wrap}
      gap={selectedGap}
    >
      {children}
    </S.FlexContent>
  );
};

export default Flex;

enum EGap {
  $0 = '0',
  $1 = '0.4rem',
  $2 = '0.8rem',
  $3 = '1rem',
  $4 = '1.6rem',
  $5 = '2rem',
  $6 = '2.4rem',
  $7 = '2.8rem',
  $8 = '3rem',
  $9 = '3.2rem',
  $10 = '3.4rem',
  $11 = '3.8rem'
}

export interface IFlexProps {
  children: ReactNode;
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
  gap?: keyof typeof EGap;
}
