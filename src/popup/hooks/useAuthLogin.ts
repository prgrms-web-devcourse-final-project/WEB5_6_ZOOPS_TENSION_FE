import { useCallback } from 'react';
import type { MessageResponse, Provider } from '@/utils/types';
import { MESSAGE_ACTION } from '@/utils/constants';
import { sendMessage } from '@/utils/utils';

export const useAuthLogin = () => {
  const handleLogin = useCallback(async (provider: Provider) => {
    try {
      const result = await sendMessage({
        action: MESSAGE_ACTION.LOGIN,
        provider,
      });

      return result;
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : '로그인 실패',
      };
    }
  }, []);

  const checkAuthStatus = useCallback(async (): Promise<MessageResponse> => {
    try {
      const status = (await sendMessage({
        action: MESSAGE_ACTION.CHECK_AUTH,
      })) as MessageResponse;
      return status;
    } catch {
      return { success: false, isLoggedIn: false };
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await sendMessage({ action: MESSAGE_ACTION.LOGOUT });
    } catch (error) {
      console.error('로그아웃 실패:', error);
      throw error;
    }
  }, []);

  return {
    handleLogin,
    checkAuthStatus,
    logout,
  };
};
