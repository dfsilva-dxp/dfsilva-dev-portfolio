import * as S from './styles';

export interface ITagProps {
  value: string;
  align?: 'left' | 'right';
}

const Tag = ({ value, align = 'left' }: ITagProps) => {
  return <S.TagContent align={align}>&lt;{value}&gt;</S.TagContent>;
};

export default Tag;
