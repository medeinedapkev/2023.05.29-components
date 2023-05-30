import { createHTMLElement } from "./functions.js";

function createPodcastWrapper(data, mainTitle) {
    if (!data || !mainTitle) {
        return '';
    }

    const podcastWrapper = createHTMLElement('div', 'podcast-wrapper');

    const podcastTitle = createHTMLElement('h2', 'title', mainTitle);
    podcastWrapper.append(podcastTitle);

    data.forEach(item => {
        let { img, time, buttonImg, title, date } = item;

        const podcastItem = createHTMLElement('div', 'podcast-item');

        const podcastPlay = createHTMLElement('div', 'podcast-play');

        const podcastPlayImg = createHTMLElement('img');
        podcastPlayImg.src = 'assets/' + img;

        const timeElement = createHTMLElement('p', 'time', time);

        const linkToPodcast = createHTMLElement('a', 'button-play');
        linkToPodcast.href = '#';

        const buttonPlayImg = createHTMLElement('img');
        buttonPlayImg.src = './' + buttonImg;

        linkToPodcast.append(buttonPlayImg);
        podcastPlay.append(podcastPlayImg, timeElement, linkToPodcast);

        const podcastDescription = createHTMLElement('div', 'podcast-description');

        const descriptionTitle = createHTMLElement('h3', 'podcast-title', title);

        const postcardDate = createHTMLElement('div', 'post-card-info', date);

        podcastDescription.append(descriptionTitle, postcardDate);

        podcastItem.append(podcastPlay, podcastDescription);
        podcastWrapper.append(podcastItem);
    })

    return podcastWrapper;
}

export default createPodcastWrapper;