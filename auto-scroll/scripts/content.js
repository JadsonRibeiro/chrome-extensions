let isRunnig = false;

function startStop(speed) {
    isRunnig = !isRunnig;
    if(isRunnig)
        move(speed);
}

function move(speed) {
    requestAnimationFrame(() => {
        window.scrollBy(0, speed);
        if(isRunnig)
            move(speed);
    })
}

chrome.runtime.onMessage.addListener((request, sender, sendReponse) => {
    startStop(request.speed);
    return true;
});