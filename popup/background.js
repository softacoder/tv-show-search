chrome.runtime.onInstalled.addListener((details) => {
  console.log(details);
});

console.log("background script running");
