import { createHTMLElement } from "./functions.js";
import createPodcastItem from './podcast-item.js';

function createPodcastWrapper(data, mainTitle) {
    if (!data || !mainTitle) {
        return '';
    }

    const podcastWrapper = createHTMLElement('div', 'podcast-wrapper');

    const podcastTitle = createHTMLElement('h2', 'title', mainTitle);
    podcastWrapper.append(podcastTitle);

    data.forEach(item => {
        const podcastItem = createPodcastItem(item)
        podcastWrapper.append(podcastItem);
    })

    return podcastWrapper;
}

export default createPodcastWrapper;