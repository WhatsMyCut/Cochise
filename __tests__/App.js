/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import App from '../src/App';

describe('App', () => {
  it('renders correctly', () => {
    const rendered = renderer.create(<App />);
    expect(rendered).toBeTruthy();
  });
});
