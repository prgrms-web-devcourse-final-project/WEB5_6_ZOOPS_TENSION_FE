import type { MessageResponse, Provider } from '@/utils/types';
import {
  createNewTabs,
  getChromeStorage,
  removeChromeStorage,
  setChromeStorage,
} from './chrome';
import { POLLING_INTERVAL, POLLING_TIMEOUT, STORAGE_KEY } from '@/utils/constants';
import { createNotification } from './utils';

const BASE_URL = import.meta.env.VITE_BASE_URL;

// uuid 생성
export const generateState = () => {
  return crypto.randomUUID().replace(/-/g, '');
};

// 로그인 시작
export const startLogin = async (provider: Provider): Promise<MessageResponse> => {
  try {
    const state = generateState();
    // 데이터 저장
    await setChromeStorage({
      [STORAGE_KEY.AUTH_STATE]: state,
    });

    // 새탭 열기
    const authUrl = `${BASE_URL}/oauth2/authorization/${provider}?source=extension&state=${state}`;

    await createNewTabs(authUrl);

    await startPolling(state);

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : '로그인 시도 실패',
    };
  }
};

// 로그인 폴링
export const startPolling = async (state: string): Promise<void> => {
  const startTime = Date.now();

  return new Promise((resolve, reject) => {
    const interval = setInterval(async () => {
      try {
        if (Date.now() - startTime > POLLING_TIMEOUT) {
          clearInterval(interval);
          await removeChromeStorage([STORAGE_KEY.AUTH_STATE]);
          createNotification.fail({ message: '로그인 실패' });
          reject(new Error('시간 초과'));
        }

        const response = await fetch(`${BASE_URL}/api/v1/auth/result?state=${state}`, {
          method: 'GET',
        });

        const result = await response.json();

        // 아직 준비 안됨
        if (response.status === 404 || response.status === 204) {
          return;
        }

        if (!response.ok) {
          return;
        }

        if (result.data?.accessToken && result.data?.sessionId) {
          await setChromeStorage({
            [STORAGE_KEY.ACCESS_TOKEN]: result.data.accessToken,
            [STORAGE_KEY.SESSION_ID]: result.data.sessionId,
          });
          createNotification.success({ message: '로그인 성공!' });
          await removeChromeStorage([STORAGE_KEY.AUTH_STATE]);
          clearInterval(interval);
          resolve();
        } else {
          return;
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error('에러 메시지:', error.message);
        } else {
          console.error('알 수 없는 에러:', error);
        }
      }
    }, POLLING_INTERVAL);
  });
};

// 로그인 상태 체크
export const checkAuthStatus = async (): Promise<MessageResponse> => {
  const { accessToken, sessionId } = await getChromeStorage<{
    accessToken: string;
    sessionId: string;
  }>([STORAGE_KEY.ACCESS_TOKEN, STORAGE_KEY.SESSION_ID]);
  return {
    success: true,
    isLoggedIn: !!(accessToken && sessionId),
  };
};

// 로그아웃
export const logout = async (): Promise<MessageResponse> => {
  await removeChromeStorage([
    STORAGE_KEY.ACCESS_TOKEN,
    STORAGE_KEY.SESSION_ID,
    STORAGE_KEY.AUTH_STATE,
  ]);
  return { success: true };
};
