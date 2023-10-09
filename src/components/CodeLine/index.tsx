import { ReactNode } from 'react';
import { Fira_Code } from 'next/font/google';

const firaCode = Fira_Code({
  weight: ['500'],
  subsets: ['latin'],
  display: 'swap'
});

import * as S from './styles';

interface ICodeLineProps {
  lineNumber: string;
  children: ReactNode;
}

const CodeLine = ({ children, lineNumber }: ICodeLineProps) => {
  return (
    <S.CodeLineContent className={firaCode.className}>
      <S.CodeLineNumber>{lineNumber}</S.CodeLineNumber>

      <S.CodeLineScript>{children}</S.CodeLineScript>
    </S.CodeLineContent>
  );
};

export default CodeLine;
