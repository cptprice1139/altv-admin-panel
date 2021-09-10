import * as alt from 'alt-client';

const url = 'http://resource/client/html/index.html';

let view: alt.WebView;

alt.on('keydown', key => {
    if (key === 116) view ? OpenPanel() : ClosePanel();
})

function OpenPanel() {
    if (view) return;
    view = new alt.WebView(url);
    view.focus();

    view.on('load', () => handleViewLoad());
}

function ClosePanel() {
    if (!view) return;
    view.destroy();
    view = null;
}

function handleViewLoad() {

}