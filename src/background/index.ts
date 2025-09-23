chrome.runtime.onMessage.addListener(async (message, sender) => {
  if (message.action === 'openSidePanel') {
    const res = await openSideTab(sender.tab?.id);

    return res;
  }

  if (message.action === 'close-sidePanel') {
    setTimeout(() => window.close(), 2000);
  }
});

// Side Panel Open
const openSideTab = async (tabId?: number): Promise<void> => {
  if (!tabId) throw Error('Tab ID not Found');
  await chrome.sidePanel.open({ tabId });
};
