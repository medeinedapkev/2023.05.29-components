import { createNewsData } from "./functions.js";
import { BIG_NEWS_DATA } from "./data.js";

function createBigNews() {
    const bigNewsElement = createNewsData(BIG_NEWS_DATA, 'big-news');

    return bigNewsElement;
}

export default createBigNews;



