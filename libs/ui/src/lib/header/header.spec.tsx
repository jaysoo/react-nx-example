import * as React from 'react';
import { render, cleanup } from 'react-testing-library';

import { Header } from './header';

describe('Header', () => {
  afterEach(cleanup);

  test('Rendering', async () => {
    const { container } = render(<Header>It works!</Header>);
    expect(container.innerHTML).toMatch(/It works!/);
  });
});
