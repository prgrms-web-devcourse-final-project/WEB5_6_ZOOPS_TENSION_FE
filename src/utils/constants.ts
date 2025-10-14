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

export const BUTTON_STATUS = {
  DEFAULT: 'default',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
} as const;
