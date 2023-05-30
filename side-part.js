import { PODCAST_DATA, EVENT_DATA } from "./data.js";
import createEventWrapper from "./event-wrapper.js";
import { createHTMLElement } from "./functions.js";
import createPodcastWrapper from "./podcast-wrapper.js";

function createSidePart(podcastData, eventData) {
    const sidepartElement = createHTMLElement('div', 'side-part');

    const podcastElement = createHTMLElement('section', 'podcast');
    const eventElement = createHTMLElement('section', 'event');

    const podcastWrapper = createPodcastWrapper(podcastData, 'Podcastai ir radijo laidos');

    const eventWrapper = createEventWrapper(eventData, 'Renginiai');

    eventElement.append(eventWrapper);
    podcastElement.append(podcastWrapper);
    sidepartElement.append(podcastElement, eventElement);

    return sidepartElement;
}

export default createSidePart;