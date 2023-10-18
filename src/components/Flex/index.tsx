import {
  ForwardRefRenderFunction,
  HTMLAttributes,
  ReactNode,
  forwardRef
} from 'react';

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

type FlexDivType = HTMLAttributes<HTMLDivElement>;

type IFlexProps = {
  children: ReactNode;
} & FlexType &
  FlexDivType;

const Flex: ForwardRefRenderFunction<HTMLDivElement, IFlexProps> = (
  {
    children,
    display = 'flex',
    direction = 'row',
    align = 'flex-start',
    justify = 'flex-start',
    content = 'stretch',
    wrap = 'wrap',
    gap = '0',
    ...props
  },
  ref
) => {
  return (
    <S.FlexContent
      ref={ref}
      display={display}
      direction={direction}
      align={align}
      justify={justify}
      content={content}
      wrap={wrap}
      gap={gap}
      {...props}
    >
      {children}
    </S.FlexContent>
  );
};

export const FlexComponent = forwardRef(Flex);
