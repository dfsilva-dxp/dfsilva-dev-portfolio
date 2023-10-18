import React, { ReactNode, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

import { Flex } from '@/components';

import * as S from './styles';
import { DefaultTheme } from '@/styles';

interface IBoxProps {
  firstChild: ReactNode;
  lastChild: ReactNode;
  icon?: ReactNode;
  alignWrapper?: 'center' | 'flex-end';
  justifyChildren?: 'center' | 'space-between';
  padding?: '3.2rem' | '3.2rem 6rem';
}

const Box = ({
  firstChild,
  lastChild,
  icon,
  alignWrapper = 'flex-end',
  justifyChildren = 'space-between',
  padding = '3.2rem 6rem'
}: IBoxProps) => {
  const splitElementRef = useRef<HTMLDivElement>(null);
  const gridBoxRef = useRef<HTMLDivElement>(null);
  const ctx = useRef<gsap.Context | null>();

  const onEnter = () => {
    if (ctx.current) {
      ctx.current.onEnter();
    }
  };

  const onLeave = () => {
    if (ctx.current) {
      ctx.current.onLeave();
    }
  };

  useLayoutEffect(() => {
    ctx.current = gsap.context((self) => {
      const tl = gsap
        .timeline({
          paused: true,
          defaults: {
            ease: 'power1.inOut',
            duration: 0.4
          }
        })
        .to(gridBoxRef.current, {
          background: DefaultTheme.colors.text.heading
        })
        .to(
          splitElementRef.current!.children,
          {
            yPercent: -100,
            stagger: -0.05
          },
          0
        );
      self.add('onEnter', () => {
        tl.play();
      });

      self.add('onLeave', () => {
        tl.reverse();
      });
    });

    return () => {
      ctx.current && ctx.current.revert();
    };
  }, []);

  return (
    <S.BoxWrapper
      align={alignWrapper}
      ref={gridBoxRef}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        padding
      }}
    >
      <Flex
        align="flex-end"
        justify={justifyChildren}
        style={{
          width: '100%'
        }}
      >
        <S.BoxSplitWrapper ref={splitElementRef}>
          <S.BoxSplitChildren>{firstChild}</S.BoxSplitChildren>
          <S.BoxSplitChildren>{lastChild}</S.BoxSplitChildren>
        </S.BoxSplitWrapper>
        {!!icon && icon}
      </Flex>
    </S.BoxWrapper>
  );
};

export default Box;
