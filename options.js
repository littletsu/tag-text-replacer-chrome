var form = document.getElementById('settingsForm'),
    letter = document.getElementById('inputletter'),
    tags = document.getElementById('inputtags'),
    msg = document.getElementById('msg'),
    reset = document.getElementById('reset');

chrome.storage.sync.get(['letter', 'tags'], (data) => {
    letter.value = data.letter;
    tags.value = data.tags;
})

function displayMsgAndReset(msgc, color) {
    msg.style.color = color
    msg.innerText = msgc
    setTimeout(() => {
        msg.style.color = 'black';
        msg.innerText = "SETTINGS"
    }, 2000)
}

form.onsubmit = (ev) => {
    ev.preventDefault();
    chrome.storage.sync.set({"letter": letter.value, "tags": tags.value}, () => {
        displayMsgAndReset("DONE", 'green')
    })
}

reset.onclick = () => {
    chrome.storage.sync.get('dtags', ({dtags}) => {
        console.log(dtags)
        chrome.storage.sync.set({"tags": dtags}, () => {
            tags.value = dtags;
            console.log(dtags)
            displayMsgAndReset("TAGS RESETED SUCCESSFULLY", 'darkblue')
        })
    })
}