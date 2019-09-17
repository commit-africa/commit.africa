import React from 'react';
import Component from '..';
import * as types from '../types';
// import { __tests__ } from '../../../..';

/* ----------- Section: Mocks ----------- */

// __tests__.components.custom.profile.basic.props

const BASE_PROPS = {};

const MOCK_PROPS: { [key: string]: types.props } = {
  basic: BASE_PROPS,
  empty: {
    ...BASE_PROPS,
  },
};

/* ----------- Section: Tests ----------- */

const createTestObject = (name): { props: types.props; test: () => JSX.Element } => ({
  props: MOCK_PROPS[name],
  test: (): JSX.Element => <Component {...MOCK_PROPS[name]} />,
});

export const basic = createTestObject('basic');
export const empty = createTestObject('empty');
