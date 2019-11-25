chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({letter: 'Please choose a letter/word to put here at extension options.', tags: 'p, h1, h2, h3, h4, h5, code, a, span, li, td, th, dd, strong, label, input, option'}, () => {
        console.log('set')
        chrome.storage.sync.get(['letter', 'tags'], (data) => {
            chrome.storage.sync.set({dletter: data.letter, dtags: data.tags}, () => {
                chrome.tabs.create({url: 'options.html'})
            })
        })

    })
    
})