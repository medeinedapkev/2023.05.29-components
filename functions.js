export function createHTMLElement(element, className, text) {
    const htmlElement = document.createElement(element);

    if (className) {
        htmlElement.classList.add(className);
    }
    
    if (text) {
        htmlElement.textContent = text
    }

    return htmlElement;
}

export function createBigButton(href, text) {
    if (!href || !text) {
        return '';
    }

    const bigButton = createHTMLElement('a');
    bigButton.classList.add('button', 'big'); 
    bigButton.href = href; 
    bigButton.innerHTML = 
    `<span>${text}</span>
    <svg class="arrow-blue" xmlns="http://www.w3.org/2000/svg" width="20" height="33"><path fill="#1200FF" d="M3.264 32.528L.76 30.026l13.761-13.761L.762 2.504 3.263 0l16.263 16.264z" fill-rule="evenodd"></path></svg>`;

    return bigButton;
}

export function createNewsData(data, className, className2) {
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


