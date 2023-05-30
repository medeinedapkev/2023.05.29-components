import { PODCAST_DATA, EVENT_DATA } from "./config.js";
import createEventWrapper from "./event-wrapper.js";
import { createHTMLElement } from "./functions.js";
import createPodcastWrapper from "./podcast-wrapper.js";

function createSidePart() {
    const sidepartElement = createHTMLElement('div', 'side-part');

    const podcastElement = createHTMLElement('section', 'podcast');
    const eventElement = createHTMLElement('section', 'event');

    const podcastWrapper = createPodcastWrapper(PODCAST_DATA);

    const eventWrapper = createEventWrapper(EVENT_DATA);

    eventElement.append(eventWrapper);
    podcastElement.append(podcastWrapper);
    sidepartElement.append(podcastElement, eventElement);

    return sidepartElement;
}

export default createSidePart;