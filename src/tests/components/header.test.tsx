import { renderWithTheme } from '@/utils/tests/helpers';

import { Header } from '@/components';
import { screen } from '@testing-library/react';

describe('Header', () => {
  it('should render currectly header', () => {
    const { container } = renderWithTheme(<Header />);

    expect(
      screen.getByRole('img', { name: 'Logotipo dfsilva' })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
