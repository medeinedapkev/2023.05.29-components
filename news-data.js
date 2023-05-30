import { createHTMLElement } from "./functions.js";

function createNewsData(data, className, className2) {
    const newsElement = createHTMLElement('div', className); 

    data.map(item => {
        let { href, img, category, title, date} = item;

        const linkToNews = createHTMLElement('a', 'news-pic');
        linkToNews.href = href;
        
        const newsItem = createHTMLElement('div', 'news-item');
        
        const imgElement = createHTMLElement('img');
        imgElement.src = 'assets/' + img;
        
        const newsInfoElement = createHTMLElement('div', 'news-info');
        
        const postCardElement = createHTMLElement('div', 'post-card', category);
        const postCardTitle = createHTMLElement('h3','news-title', title);
        const postCardDate = createHTMLElement('div', 'post-card-info', date);
        
        if (className2) {
            linkToNews.classList.add(className2);
            newsItem.classList.add(className2);
            newsInfoElement.classList.add(className2);
            postCardElement.classList.add(className2);
            postCardTitle.classList.add(className2);
        }

        newsInfoElement.append(postCardElement, postCardTitle, postCardDate);
        newsItem.append(imgElement, newsInfoElement);
        linkToNews.append(newsItem);
        newsElement.append(linkToNews);
    })

    return newsElement;
}

export default createNewsData;