import type { MESSAGE_ACTION, PROVIDER } from './constants';

export type Provider = (typeof PROVIDER)[keyof typeof PROVIDER];

type MessageAction = (typeof MESSAGE_ACTION)[keyof typeof MESSAGE_ACTION];

export interface MessageResponse {
  success: boolean;
  isLoggedIn?: boolean;
  error?: string;
}

export interface MessageRequest {
  action: MessageAction;
}
