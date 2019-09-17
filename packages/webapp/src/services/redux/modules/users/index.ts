import { Action } from 'redux';
import * as types from './types';
import { v4 as createUniqueId } from 'uuid';
import { store } from '../../';

const ACTIONS = {
  CREATE_NEW_USER: 'user/CREATE_NEW_USER',
  SKIP_ACTION: 'user/SKIP_ACTION',
};

export const INITIAL_STATE: types.state = {
  id: null,
};

export default (state = INITIAL_STATE, action): types.state => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.SKIP_ACTION:
      return state;

    case ACTIONS.CREATE_NEW_USER:
      return {
        ...state,
        id: payload.id,
      };

    default:
      return state;
  }
};

export const createUser = (newId?: string): Action & { payload: { id: string } } => {
  const { user: { id: currentId } } = store.getState();

  if (currentId) {
    return {
      type: ACTIONS.SKIP_ACTION
    }
  }

  return {
    type: ACTIONS.CREATE_NEW_USER,
    payload: {
      id: newId || createUniqueId(),
    },
  };
};
