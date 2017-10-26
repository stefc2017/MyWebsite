function resizeIframe(obj) {
    resizeHeight(obj);
    resizeWidth(obj);
}

function resizeHeight(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
}

function resizeWidth(obj) {
    obj.style.width = window.screen.width + 'px';
}
