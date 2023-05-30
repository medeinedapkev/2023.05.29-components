import { createHTMLElement } from './functions.js';
import createMainPart from './main-part.js';
import createSidePart from './side-part.js';

function init() {
    const contentElement = document.querySelector('.content');

    const wholePartElement = createHTMLElement('div');
    wholePartElement.classList.add('whole-part', 'container');

    const mainPartElement = createMainPart()
    const sidepartElement = createSidePart()

    wholePartElement.append(mainPartElement, sidepartElement);

    contentElement.append(wholePartElement);
}

init()

