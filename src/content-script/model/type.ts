import type { BUTTON_STATUS, MESSAGE_ACTION } from './constants';

export type ScrapButtonStatus = (typeof BUTTON_STATUS)[keyof typeof BUTTON_STATUS];

type MessageAction = (typeof MESSAGE_ACTION)[keyof typeof MESSAGE_ACTION];

export interface MessageRequest {
  action: MessageAction;
}

export interface MessageResponse {
  success: boolean;
}

export type Result<T> =
  | { success: true; data: T; msg: string; status: number }
  | { success: false; msg: string; status?: number };

// 스크랩 관련 타입
export interface ScrapData {
  dataSourceId: string;
}

export type ScrapMessageResponse = Result<ScrapData>;

// 메시지 타입
export interface ScrapMessageRequest extends MessageRequest {
  url: string;
}
