import createBigNews from "./big-news.js";
import { createBigButton, createHTMLElement } from "./functions.js";
import createSmallNews from "./small-news.js";

function createNewsWrapper(bigNewsData, smallNewsData, title) {
    if (!title) {
        return '';
    }
    
    const newsWrapperElement = createHTMLElement('div', 'news-wrapper');

    const newsTitle = createHTMLElement('h1', 'title', title);

    const newsList = createHTMLElement('div', 'news-list');

    const bigNews = createBigNews(bigNewsData);
    const smallNews = createSmallNews(smallNewsData);

    newsList.append(bigNews, smallNews);

    const buttonBig = createBigButton('https://codeacademy.lt/visos-naujienos/', 'Visos naujienos');
   
    newsWrapperElement.append(newsTitle, newsList, buttonBig);

    return newsWrapperElement;
}

export default createNewsWrapper;