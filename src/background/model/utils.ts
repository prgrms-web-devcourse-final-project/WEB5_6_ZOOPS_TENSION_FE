// create notification
export const createNotification = {
  success: ({
    title = 'zoops tension',
    message,
  }: {
    title?: string;
    message: string;
  }) => {
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'images/logo.webp',
      title,
      message,
      priority: 2,
    });
  },

  fail: ({ title = 'zoops tension', message }: { title?: string; message: string }) => {
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'images/logo.webp',
      title,
      message,
      priority: 2,
    });
  },
};
