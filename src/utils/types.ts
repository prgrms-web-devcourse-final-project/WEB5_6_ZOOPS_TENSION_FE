import type { MESSAGE_STATE, PROVIDER } from './constants';

export type Provider = (typeof PROVIDER)[keyof typeof PROVIDER];

type ACTION = (typeof MESSAGE_STATE)[keyof typeof MESSAGE_STATE];

export interface MessageResponse {
  success: boolean;
  isLoggedIn?: boolean;
  error?: string;
}

export interface MessageRequest {
  action: ACTION;
}
