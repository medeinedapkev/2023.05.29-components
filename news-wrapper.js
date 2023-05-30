import { createHTMLElement } from "./functions.js";
import createBigButton from "./big-button.js";
import createNewsData from "./news-data.js";

function createNewsWrapper(bigNewsData, smallNewsData, title) {
    if (!title) {
        return '';
    }
    
    const newsWrapperElement = createHTMLElement('div', 'news-wrapper');

    const newsTitle = createHTMLElement('h1', 'title', title);

    const newsList = createHTMLElement('div', 'news-list');

    const bigNews = createNewsData(bigNewsData, 'big-news');
    const smallNews = createNewsData(smallNewsData, 'small-news', 'small');

    newsList.append(bigNews, smallNews);

    const buttonBig = createBigButton('https://codeacademy.lt/visos-naujienos/', 'Visos naujienos');
   
    newsWrapperElement.append(newsTitle, newsList, buttonBig);

    return newsWrapperElement;
}

export default createNewsWrapper;