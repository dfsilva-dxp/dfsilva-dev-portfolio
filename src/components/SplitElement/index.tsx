import { ReactNode, useRef } from 'react';
import { gsap } from 'gsap';

import * as S from './styles';

interface ISplitElementProps {
  firstChild: ReactNode;
  lastChild: ReactNode;
}

const SplitElement = ({ firstChild, lastChild }: ISplitElementProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const tl = gsap.timeline({
    defaults: { duration: 0.2, ease: 'power1.inOut' }
  });

  const onEnter = () => {
    if (wrapperRef.current) {
      const { children } = wrapperRef.current;

      tl.to(children, {
        yPercent: -100,
        stagger: -0.05
      });
    }
  };

  const onLeave = () => {
    if (wrapperRef.current) {
      const { children } = wrapperRef.current;

      tl.to(children, {
        yPercent: 0
      });
    }
  };
  return (
    <S.SplitWrapper
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      ref={wrapperRef}
    >
      <S.SplitChildren>{firstChild}</S.SplitChildren>
      <S.SplitChildren>{lastChild}</S.SplitChildren>
    </S.SplitWrapper>
  );
};

export default SplitElement;
