import { renderWithTheme } from '@/utils/tests/helpers';

import { Container } from '@/components';

import { DefaultTheme } from '@/styles';

describe('Container', () => {
  it('should render with width: 100% in small size', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Test item</span>
      </Container>
    );

    expect(container.firstChild).toHaveStyle({
      width: '100%',
      'padding-right': '1.6rem',
      'padding-left': '1.6rem',
      'margin-right': 'auto',
      'margin-left': 'auto'
    });
  });

  it('should render with a width 54rem when the screen has a min-width 576px', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Test item</span>
      </Container>
    );

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      DefaultTheme.grid.sm,
      {
        media: '(min-width: 576px)'
      }
    );
  });

  it('should render with a width 72rem when the screen has a min-width 768px', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Test item</span>
      </Container>
    );

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      DefaultTheme.grid.md,
      {
        media: '(min-width: 768px)'
      }
    );
  });

  it('should render with a width 96rem when the screen has a min-width 992px', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Test item</span>
      </Container>
    );

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      DefaultTheme.grid.lg,
      {
        media: '(min-width: 992px)'
      }
    );
  });

  it('should render with a width 114rem when the screen has a min-width 1200px', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Test item</span>
      </Container>
    );

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      DefaultTheme.grid.xlg,
      {
        media: '(min-width: 1200px)'
      }
    );
  });

  it('should render with a width 132rem when the screen has a min-width 1400px', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Test item</span>
      </Container>
    );

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      DefaultTheme.grid.xxlg,
      {
        media: '(min-width: 1400px)'
      }
    );
  });
});
