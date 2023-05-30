import { createHTMLElement } from "./functions.js";
import createNewsWrapper from "./news-wrapper.js";
import createVideoWrapper from "./video-wrapper.js";

function createMainPart() {
    const mainPartElement = createHTMLElement('div', 'main-part');

    const newsElement = createHTMLElement('section', 'news');
    const videoElement = createHTMLElement('section', 'video');

    const newsWrapper = createNewsWrapper();
    const videoWrapper = createVideoWrapper();

    newsElement.append(newsWrapper);
    videoElement.append(videoWrapper);

    mainPartElement.append(newsElement, videoElement);

    return mainPartElement;
}

export default createMainPart;