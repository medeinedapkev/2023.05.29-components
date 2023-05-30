import { createNewsData } from "./functions.js";

function createBigNews(data) {
    const bigNewsElement = createNewsData(data, 'big-news');

    return bigNewsElement;
}

export default createBigNews;



