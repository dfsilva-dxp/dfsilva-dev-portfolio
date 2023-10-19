import { HTMLAttributes, ReactNode, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

import * as S from './styles';

type SplitDivType = HTMLAttributes<HTMLDivElement>;

interface ISplitProps extends SplitDivType {
  children: ReactNode;
  splitChildren: ReactNode;
}

const Split = ({ children, splitChildren, ...props }: ISplitProps) => {
  const splitElementRef = useRef<HTMLDivElement>(null);
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
    <S.SplitWrapper
      {...props}
      ref={splitElementRef}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <S.SplitChildren>{children}</S.SplitChildren>
      <S.SplitChildren>{splitChildren}</S.SplitChildren>
    </S.SplitWrapper>
  );
};

export default Split;
