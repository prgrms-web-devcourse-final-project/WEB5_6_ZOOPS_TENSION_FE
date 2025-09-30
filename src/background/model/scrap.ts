import { BASE_URL } from '@/utils/constants';

export const scrapUrl = async (url: string): Promise<void> => {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/archive`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sourceUrl: url,
        folderId: 0,
      }),
    });

    console.log('response', response);
  } catch (error) {
    if (error instanceof Error) {
      console.error('스크롤 하는 중에 에러가 났어요~', error.message);
    }
  }
};
