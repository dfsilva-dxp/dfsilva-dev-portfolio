import { ReactNode, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

import { Flex } from '@/components';

import * as S from './styles';
import { DefaultTheme } from '@/styles';

export type BorderType = {
  borderBt?: 'top' | 'bottom' | 'tpb' | 'none';
  borderLr?: 'left' | 'right' | 'lfr' | 'none';
  padding?: string;
};

interface IBoxProps extends BorderType {
  children: ReactNode;
  splitChildren: ReactNode;
  icon?: ReactNode;
  contentAlign?: 'center' | 'flex-end';
  justifySplit?: 'center' | 'space-between';
  area?: string;
}

const Box = ({
  children,
  splitChildren,
  icon,
  contentAlign = 'flex-end',
  justifySplit = 'space-between',
  area,
  padding = '3.2rem',
  borderBt = 'tpb',
  borderLr = 'lfr'
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
    <S.BoxContent
      align={contentAlign}
      borderBt={borderBt}
      borderLr={borderLr}
      padding={padding}
      ref={gridBoxRef}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        gridArea: `${area ? area : ''}`
      }}
    >
      <Flex
        align="center"
        justify={justifySplit}
        style={{
          width: '100%'
        }}
      >
        <S.BoxSplitWrapper ref={splitElementRef}>
          <S.BoxSplitChildren>{children}</S.BoxSplitChildren>
          <S.BoxSplitChildren>{splitChildren}</S.BoxSplitChildren>
        </S.BoxSplitWrapper>

        {!!icon && icon}
      </Flex>
    </S.BoxContent>
  );
};

export default Box;
