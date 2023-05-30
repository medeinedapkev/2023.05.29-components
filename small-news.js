import { SMALL_NEWS_DATA } from "./data.js";
import { createNewsData } from "./functions.js";

function createSmallNews() {
    const smallNewsElement = createNewsData(SMALL_NEWS_DATA, 'small-news', 'small');

    return smallNewsElement;
}

export default createSmallNews;



