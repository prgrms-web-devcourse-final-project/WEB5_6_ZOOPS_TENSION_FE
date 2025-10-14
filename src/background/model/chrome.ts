const BASE_URL = process.env.BASE_URL;

/**
 * Chrome Storage에 데이터 저장
 */
export const setChromeStorage = async <T extends Record<string, unknown>>(
  data: T
): Promise<void> => {
  if (!data || Object.keys(data).length === 0) {
    throw new Error('setChromeStorage에 저장할 데이터가 비어있습니다.');
  }

  try {
    await chrome.storage.local.set(data);
  } catch (error) {
    throw new Error(
      `Storage 저장 실패: ${error instanceof Error ? error.message : '알 수 없는 오류'}`
    );
  }
};

/**
 * 새 탭 생성
 */
export const createNewTabs = async (url: string): Promise<chrome.tabs.Tab | void> => {
  if (!url || url.trim() === '') {
    try {
      const tab = await chrome.tabs.create({ url });
      if (!tab) {
        throw new Error('탭 생성에 실패했습니다.');
      }
      return tab;
    } catch (error) {
      throw new Error(
        `탭 생성 실패: ${error instanceof Error ? error.message : '알 수 없는 오류'}`
      );
    }
  }

  await chrome.tabs.create({ url });
};

/**
 * Chrome Storage에서 데이터 가져오기
 */
export const getChromeStorage = async <T = unknown>(
  key: string | string[]
): Promise<T> => {
  if (!key || (Array.isArray(key) && key.length === 0)) {
    throw new Error('조회할 키가 필요합니다.');
  }
  try {
    const result = await chrome.storage.local.get(key);

    return result as T;
  } catch (error) {
    throw new Error(
      `Storage 조회 실패: ${error instanceof Error ? error.message : '알 수 없는 오류'}`
    );
  }
};

/**
 * Chrome Storage에서 데이터 삭제
 */
export const removeChromeStorage = async (key: string | string[]): Promise<void> => {
  if (!key || (Array.isArray(key) && key.length === 0)) {
    throw new Error('삭제할 키가 필요합니다.');
  }
  try {
    await chrome.storage.local.remove(key);
  } catch (error) {
    throw new Error(
      `Storage 삭제 실패: ${error instanceof Error ? error.message : '알 수 없는 오류'}`
    );
  }
};

/**
 * Chrome 쿠키에 데이터 저장
 */
export const setChromeCookie = async (name: string, value: string): Promise<void> => {
  if (!name || !value) {
    throw new Error('setChromeCookie:  name, value 모두 필요합니다.');
  }

  try {
    await chrome.cookies.set({
      url: BASE_URL!,
      name,
      value,
      path: '/api/',
      secure: true,
      sameSite: 'no_restriction',
    });
  } catch (error) {
    throw new Error(
      `쿠키 저장 실패: ${error instanceof Error ? error.message : '알 수 없는 오류'}`
    );
  }
};

/**
 * Chrome 쿠키에서 데이터 가져오기
 */
export const getChromeCookie = async (name: string): Promise<string | null> => {
  if (!name) {
    throw new Error('getChromeCookie:  name 모두 필요합니다.');
  }

  try {
    const cookie = await chrome.cookies.get({ url: `${BASE_URL}/api/`, name });
    return cookie?.value ?? null;
  } catch (error) {
    throw new Error(
      `쿠키 조회 실패: ${error instanceof Error ? error.message : '알 수 없는 오류'}`
    );
  }
};

/**
 * Chrome 쿠키 삭제
 */
export const removeChromeCookie = async (name: string): Promise<void> => {
  if (!name) {
    throw new Error('removeChromeCookie: name 필요합니다.');
  }

  try {
    await chrome.cookies.remove({ url: `${BASE_URL}/api/`, name });
  } catch (error) {
    throw new Error(
      `쿠키 삭제 실패: ${error instanceof Error ? error.message : '알 수 없는 오류'}`
    );
  }
};
