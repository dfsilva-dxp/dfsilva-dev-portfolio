import { HTMLAttributes, ReactNode, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

import * as S from './styles';

type SplitDivType = HTMLAttributes<HTMLDivElement>;

interface ISplitProps extends SplitDivType {
  firstChild: ReactNode;
  lastChild: ReactNode;
}

const Split = ({ firstChild, lastChild, ...props }: ISplitProps) => {
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
      <S.SplitChildren>{firstChild}</S.SplitChildren>
      <S.SplitChildren>{lastChild}</S.SplitChildren>
    </S.SplitWrapper>
  );
};

export default Split;
