/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Router from '../src/Router';

test('renders correctly', async () => {
  await ReactTestRenderer.act(() => {
    ReactTestRenderer.create(<Router />);
  });
});
