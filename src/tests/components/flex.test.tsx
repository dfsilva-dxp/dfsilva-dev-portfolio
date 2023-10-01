import { Flex } from '@/components';
import { renderWithTheme } from '@/utils/tests/helpers';

describe('Flex', () => {
  it('should renders with row direction by default', () => {
    const { container } = renderWithTheme(
      <Flex>
        <span>Test item I</span>
        <span>Test item II</span>
      </Flex>
    );

    expect(container.firstChild).toHaveStyle({
      display: 'flex',
      flexDirection: 'row'
    });
  });

  it('should renders with column direction when passed', () => {
    const { container } = renderWithTheme(
      <Flex direction="column">
        <span>Test item I</span>
        <span>Test item II</span>
      </Flex>
    );

    expect(container.firstChild).toHaveStyle({
      display: 'flex',
      flexDirection: 'column'
    });
  });

  it('should renders with align flex-start and justify flex-start by default', () => {
    const { container } = renderWithTheme(
      <Flex direction="column">
        <span>Test item I</span>
        <span>Test item II</span>
      </Flex>
    );

    expect(container.firstChild).toHaveStyle({
      display: 'flex',
      flexDirection: 'column',
      'align-items': 'flex-start',
      'justify-content': 'flex-start'
    });
  });

  it('should renders with align center and justify center when passed', () => {
    const { container } = renderWithTheme(
      <Flex direction="column" align="center" justify="center">
        <span>Test item I</span>
        <span>Test item II</span>
      </Flex>
    );

    expect(container.firstChild).toHaveStyle({
      display: 'flex',
      flexDirection: 'column',
      'align-items': 'center',
      'justify-content': 'center'
    });
  });
});
