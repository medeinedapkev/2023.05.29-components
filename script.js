import { createHTMLElement } from './functions.js';
import createMainPart from './main-part.js';
import createSidePart from './side-part.js';
import { BIG_NEWS_DATA, SMALL_NEWS_DATA, PODCAST_DATA, EVENT_DATA } from './data.js';

function init() {
    const contentElement = document.querySelector('.content');

    const wholePartElement = createHTMLElement('div');
    wholePartElement.classList.add('whole-part', 'container');

    const mainPartElement = createMainPart(BIG_NEWS_DATA, SMALL_NEWS_DATA);
    const sidepartElement = createSidePart(PODCAST_DATA, EVENT_DATA);

    wholePartElement.append(mainPartElement, sidepartElement);

    contentElement.append(wholePartElement);
}

init();

