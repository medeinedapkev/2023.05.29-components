import createBigNews from "./big-news.js";
import { createHTMLElement } from "./functions.js";
import createSmallNews from "./small-news.js";

function createNewsWrapper() {
    const newsWrapperElement = createHTMLElement('div', 'news-wrapper');

    const newsTitle = createHTMLElement('h1', 'title', 'Naujienos');

    const newsList = createHTMLElement('div', 'news-list');

    const bigNews = createBigNews();
    const smallNews = createSmallNews();

    newsList.append(bigNews, smallNews);

    const buttonBig = createHTMLElement('a');
    buttonBig.classList.add('button', 'big');
    buttonBig.href = 'https://codeacademy.lt/visos-naujienos/';
    buttonBig.innerHTML = `<span>Visos naujienos</span>
                           <svg class="arrow-blue" xmlns="http://www.w3.org/2000/svg" width="20" height="33"><path fill="#1200FF" d="M3.264 32.528L.76 30.026l13.761-13.761L.762 2.504 3.263 0l16.263 16.264z" fill-rule="evenodd"></path></svg>`
   
    newsWrapperElement.append(newsTitle, newsList, buttonBig);

    return newsWrapperElement;


}

export default createNewsWrapper;