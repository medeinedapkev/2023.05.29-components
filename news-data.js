import { createHTMLElement } from "./functions.js";
import createNewsDataItem from "./news-data-item.js";

function createNewsData(data, className, className2) {
    const newsElement = createHTMLElement('div', className); 

    data.map(item => {
        const newsItemElement = createNewsDataItem(item, className2);
        
        newsElement.append(newsItemElement);
    })

    return newsElement;
}

export default createNewsData;