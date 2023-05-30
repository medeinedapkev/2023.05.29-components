import { createNewsData } from "./functions.js";

function createSmallNews(data) {
    const smallNewsElement = createNewsData(data, 'small-news', 'small');

    return smallNewsElement;
}

export default createSmallNews;



