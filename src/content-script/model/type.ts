import type { BUTTON_STATUS } from '@/utils/constants';
import type { MessageRequest, Result } from '@/utils/types';

export type ScrapButtonStatus = (typeof BUTTON_STATUS)[keyof typeof BUTTON_STATUS];

// 스크랩 관련 타입
export interface ScrapData {
  dataSourceId: string;
}

export type ScrapMessageResponse = Result<ScrapData>;

// 메시지 타입
export interface ScrapMessageRequest extends MessageRequest {
  url: string;
}
