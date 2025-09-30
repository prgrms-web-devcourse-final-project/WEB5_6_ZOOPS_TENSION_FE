import { MESSAGE_ACTION } from '@/utils/constants';
import { checkAuthStatus, logout, startLogin } from './model/auth';
import { scrapUrl } from './model/scrap';

chrome.runtime.onMessage.addListener((request, _, sendResponse) => {
  // 로그인
  if (request.action === MESSAGE_ACTION.LOGIN) {
    startLogin(request.provider)
      .then(sendResponse)
      .catch((error) => sendResponse({ success: false, error: error.message }));
    return true;
  }

  // 로그인 상태 체크
  if (request.action === MESSAGE_ACTION.CHECK_AUTH) {
    checkAuthStatus()
      .then(sendResponse)
      .catch((error) => sendResponse({ isLoggedIn: false, error: error.message }));
    return true;
  }

  // 로그아웃
  if (request.action === MESSAGE_ACTION.LOGOUT) {
    logout()
      .then(() => sendResponse({ success: true }))
      .catch((error) => sendResponse({ success: false, error: error.message }));
    return true;
  }

  // 스크랩
  if (request.action === MESSAGE_ACTION.SCRAP) {
    scrapUrl(request.url);
  }
});
