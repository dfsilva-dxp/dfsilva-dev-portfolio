import * as S from './styles';

const HelloWorld = () => {
  return (
    <>
      <S.ConsoleElement>console</S.ConsoleElement>
      <S.DotElement>.</S.DotElement>
      <S.LogElement>log</S.LogElement>
      <S.ElementOpensParenthesis>{'('}</S.ElementOpensParenthesis>
      <S.StringElement>{'"hello world"'}</S.StringElement>
      <S.ElementClosesParenthesis>{')'}</S.ElementClosesParenthesis>
      <S.SemicolonElement>;</S.SemicolonElement>
    </>
  );
};

export default HelloWorld;
