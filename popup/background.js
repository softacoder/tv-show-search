chrome.runtime.onInstalled.addListener((details) => {
  chrome.contextMenus.create({
    title: "Test Context Menu",
    id: "contextMenu1",
    contexts: ["page, selection"],
  });
  chrome.contextMenus.onClicked.addListener((event) => {
    chrome.tabs.create({
      url: `https://www.imbd.com/find?q=${event.selectionText}&ref_=nvsr_sm`,
    });
  });
});

console.log("background script running");
