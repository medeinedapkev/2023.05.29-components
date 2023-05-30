import { createHTMLElement } from "./functions.js";
import { BIG_NEWS_DATA } from "./data.js";

function createBigNews() {
    const bigNewsElement = createBigNewsData(BIG_NEWS_DATA);

    return bigNewsElement;
}

export default createBigNews;

function createBigNewsData(data) {
    const bigNewsElement = createHTMLElement('div', 'big-news')
 
    data.map(item => {
        let { href, img, category, title, date} = item;

        const linkToBigNews = createHTMLElement('a', 'news-pic');
        linkToBigNews.href = href;

        const newsItemElement = createHTMLElement('div', 'news-item');

        const imgElement = createHTMLElement('img');
        imgElement.src = 'assets/' + img;

        const newsInfoElement = createHTMLElement('div', 'news-info');

        const postCardElement = createHTMLElement('div', 'post-card', category);
        const postCardTitle = createHTMLElement('h2', 'news-title', title);
        const postCardDate = createHTMLElement('div', 'post-card-info', date);

        newsInfoElement.append(postCardElement, postCardTitle, postCardDate);
        newsItemElement.append(imgElement, newsInfoElement);
        linkToBigNews.append(newsItemElement);
        bigNewsElement.append(linkToBigNews);
    })

    return bigNewsElement;
}

