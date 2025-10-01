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

export interface APIResponse<T> {
  status: number;
  msg: string;
  data: T;
}

export type Result<T> =
  | { success: true; data: T; msg: string; status?: number }
  | { success: false; msg: string; status?: number };
