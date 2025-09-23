chrome.runtime.onMessage.addListener(async (message, sender) => {
  if (message.action) {
    const res = await openSideTab(sender.tab?.id);

    return res;
  }
});

// Side Panel Open
const openSideTab = async (tabId?: number): Promise<void> => {
  if (!tabId) throw Error('Tab ID not Found');
  await chrome.sidePanel.open({ tabId });
};
