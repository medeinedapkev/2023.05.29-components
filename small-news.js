import { SMALL_NEWS_DATA } from "./data.js";
import { createHTMLElement } from "./functions.js";

function createSmallNews() {
    const smallNewsElement = createSmallNewsData(SMALL_NEWS_DATA);

    return smallNewsElement;
}

export default createSmallNews;

function createSmallNewsData(data) {
    const smallNewsElement = createHTMLElement('div', 'small-news');

    data.map(item => {
        let { href, img, category, title, date} = item;

        const linkToSmallNews = createHTMLElement('div');
        linkToSmallNews.classList.add('news-pic', 'small');
        linkToSmallNews.href = href;

        const newsItem = createHTMLElement('div');
        newsItem.classList.add('news-item', 'small');

        const imgElement = createHTMLElement('img');
        imgElement.src = 'assets/' + img;

        const newsInfoElement = createHTMLElement('div');
        newsInfoElement.classList.add('news-info', 'small');

        const postCardElement = createHTMLElement('div', 'post-card', category);
        postCardElement.classList.add('small');

        const postCardTitle = createHTMLElement('h3','news-title', title);
        postCardTitle.classList.add('small');

        const postCardDate = createHTMLElement('div', 'post-card-info', date);

        newsInfoElement.append(postCardElement, postCardTitle, postCardDate);
        newsItem.append(imgElement, newsInfoElement);
        linkToSmallNews.append(newsItem);
        smallNewsElement.append(linkToSmallNews);
    })

    return smallNewsElement;
}