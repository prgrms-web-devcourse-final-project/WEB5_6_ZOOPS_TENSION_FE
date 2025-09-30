import type { BUTTON_STATUS, MESSAGE_ACTION } from './constants';

export type ScrapButton = (typeof BUTTON_STATUS)[keyof typeof BUTTON_STATUS];

type MessageAction = (typeof MESSAGE_ACTION)[keyof typeof MESSAGE_ACTION];

export interface MessageRequest {
  action: MessageAction;
}

export interface MessageResponse {
  success: boolean;
  error?: string;
}
