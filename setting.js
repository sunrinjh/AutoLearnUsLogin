document.getElementById('savebtn').onclick = function() {
    checkbox = document.getElementById('checkbox');
    
    chrome.storage.sync.set({ "settings":  checkbox.checked});
    chrome.storage.sync.get('settings', function(data) {
        value = data.settings;
    });
    
    
};
console.log("im working")