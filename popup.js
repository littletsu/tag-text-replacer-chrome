let changeButton = document.getElementById("changeButton")

chrome.storage.sync.get('letter', ({letter}) => {
    changeButton.innerText = letter;
    
})

changeButton.addEventListener("click", () => {
    chrome.storage.sync.get('letter', ({letter}) => {
        chrome.storage.sync.get('tags', ({tags}) => {
            chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
                chrome.tabs.executeScript(
                    tabs[0].id,
                    {
                        code: `document.querySelectorAll('${tags}').forEach(function(node) {
                            node.innerText = "${letter}"
                        });`
                    }
                )
            })
        })
        
    })
})