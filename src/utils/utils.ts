// background 메지시 전송
export const sendMessage = <MessageRequest, MessageResponse>(
  message: MessageRequest
): Promise<MessageResponse> => {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage(message, (response) => {
      if (chrome.runtime.lastError) {
        reject(new Error(chrome.runtime.lastError.message));
      } else {
        resolve(response);
      }
    });
  });
};
