import { MESSAGE_STATE } from '@/utils/constants';
import { checkAuthStatus, logout, startLogin } from './model/auth';

chrome.runtime.onMessage.addListener((request, _, sendResponse) => {
  if (request.action === MESSAGE_STATE.LOGIN) {
    startLogin(request.provider)
      .then(sendResponse)
      .catch((error) => sendResponse({ success: false, error: error.message }));
    return true;
  }

  if (request.action === MESSAGE_STATE.CHECK_AUTH) {
    checkAuthStatus()
      .then(sendResponse)
      .catch((error) => sendResponse({ isLoggedIn: false, error: error.message }));
    return true;
  }

  if (request.action === MESSAGE_STATE.LOGOUT) {
    logout()
      .then(() => sendResponse({ success: true }))
      .catch((error) => sendResponse({ success: false, error: error.message }));
    return true;
  }
});
