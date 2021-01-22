import { IApp } from '../../../domain/app/app';
import * as ACTION_TYPES from '../actions/action-types';
import { IError } from '../../../domain/common';

export const appReducer = (state: IApp, [type, payload]: [string, any]): IApp => {
  switch (type) {
    case ACTION_TYPES.INIT_APP: {
      return {
        ...state,
        ...payload,
      };
    }
    case ACTION_TYPES.AUTHENTICATION_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
      };
    }
    case ACTION_TYPES.AUTHENTICATION_FAILURE: {
      return {
        ...state,
        errors: { auth: { message: payload.error.message } as IError },
      };
    }
    case ACTION_TYPES.VERIFICATION_SUCCESS: {
      return {
        ...state,
        isWalletVerified: true,
      };
    }
    case ACTION_TYPES.VERIFICATION_FAILURE: {
      return {
        ...state,
        errors: { verify: { message: payload.error.message } as IError },
      };
    }
    case ACTION_TYPES.ONBOARDING_COMPLETETED: {
      return {
        ...state,
        isOnboardingCompleted: true,
      };
    }
    case ACTION_TYPES.ONBOARDING_FAILURE: {
      return {
        ...state,
        errors: { onboarding: { message: payload.error.message } as IError },
      };
    }
    case ACTION_TYPES.LOGOUT_SUCCESS: {
      return {
        ...state,
        isAuthenticated: false,
      };
    }
    case ACTION_TYPES.LOGOUT_FAILURE: {
      return {
        ...state,
        errors: { auth: { message: payload.error.message } as IError },
      };
    }
    case ACTION_TYPES.CHANGE_NETWORK_SUCCESS: {
      return {
        ...state,
        network: payload.network,
      };
    }
    case ACTION_TYPES.CHANGE_NETWORK_FAILURE: {
      return {
        ...state,
        errors: { settings: { message: payload.error.message } as IError },
      };
    }
    default:
      return state;
  }
};
