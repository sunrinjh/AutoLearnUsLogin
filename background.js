chrome.runtime.onInstalled.addListener(({ reason, version }) => {
    if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
        let url = chrome.runtime.getURL("startup.html");
        chrome.tabs.create({ url });
    }
  });
