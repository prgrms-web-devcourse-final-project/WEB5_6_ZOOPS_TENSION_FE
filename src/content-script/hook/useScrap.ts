import { useState } from 'react';
import type {
  ScrapButtonStatus,
  ScrapMessageRequest,
  ScrapMessageResponse,
} from '../model/type';
import { BUTTON_STATUS, MESSAGE_ACTION } from '@/utils/constants';
import { sendMessage } from '@/utils/utils';

export const useScrap = () => {
  const [buttonState, setButtonState] = useState<ScrapButtonStatus>(
    BUTTON_STATUS.DEFAULT
  );

  const scrapUrl = async () => {
    setButtonState(BUTTON_STATUS.LOADING);
    try {
      const [result] = await Promise.all([
        sendMessage<ScrapMessageRequest, ScrapMessageResponse>({
          action: MESSAGE_ACTION.SCRAP,
          url: window.location.href,
        }),
        new Promise((resolve) => setTimeout(resolve, 2000)),
      ]);

      if (result.success) {
        setButtonState(BUTTON_STATUS.SUCCESS);

        // 2초 후 기본 상태로 복귀
        setTimeout(() => {
          setButtonState(BUTTON_STATUS.DEFAULT);
        }, 2000);
      } else {
        setButtonState(BUTTON_STATUS.ERROR);

        // 3초 후 기본 상태로 복귀
        setTimeout(() => {
          setButtonState(BUTTON_STATUS.DEFAULT);
        }, 3000);
      }
    } catch (error) {
      console.error('스크랩 오류:', error);
      setButtonState(BUTTON_STATUS.ERROR);

      setTimeout(() => {
        setButtonState(BUTTON_STATUS.DEFAULT);
      }, 3000);
    }
  };

  return {
    buttonState,
    scrapUrl,
  };
};
