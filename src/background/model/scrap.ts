import { getChromeStorage } from './chrome';
import { BASE_URL, STORAGE_KEY } from '@/utils/constants';
import type { APIResponse, Result } from '@/utils/types';
import { createNotification } from './utils';

interface ScrapData {
  dataSourceId: string;
}

type ScrapResponse = Result<ScrapData>;

export const scrapUrl = async (url: string): Promise<ScrapResponse> => {
  try {
    const { accessToken } = await getChromeStorage<{ accessToken: string }>(
      STORAGE_KEY.ACCESS_TOKEN
    );

    console.log('accessToken', accessToken);

    // 토큰이 없는 경우
    if (!accessToken) {
      createNotification.fail({ message: '로그인이 필요한 서비스입니다.' });
      return { success: false, msg: '로그인이 필요한 서비스입니다.' };
    }

    const response = await fetch(`${BASE_URL}/api/v1/archive`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        sourceUrl: url,
        folderId: 0,
      }),
    });

    const result: APIResponse<ScrapData> = await response.json();

    console.log('result', result);
    if (!response.ok) {
      setTimeout(() => {
        createNotification.fail({ message: '해당 페이지 스크랩에 실패했습니다.' });
      }, 3000);
      return { success: false, ...result };
    }

    setTimeout(() => {
      createNotification.success({ message: '스크랩 성공!' });
    }, 3000);

    return { success: true, ...result };
  } catch (error) {
    const msg =
      error instanceof Error ? error.message : '스크롤 하는 중에 에러가 났어요~';

    return { success: false, msg: msg };
  }
};
