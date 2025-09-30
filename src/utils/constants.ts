export const BASE_URL = 'https://api.test.zoopzoop.kro.kr';
export const POLLING_INTERVAL = 1000; // 1초
export const POLLING_TIMEOUT = 120000; // 2분

export const MESSAGE_ACTION = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  CHECK_AUTH: 'CHECK_AUTH',
  SCRAP: 'SCRAP',
} as const;

export const PROVIDER = {
  GOOGLE: 'google',
  KAKAO: 'kakao',
} as const;

export const STORAGE_KEY = {
  AUTH_STATE: 'authState',
  ACCESS_TOKEN: 'accessToken',
  SESSION_ID: 'sessionId',
};
