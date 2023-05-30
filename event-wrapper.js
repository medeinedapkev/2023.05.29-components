import { createHTMLElement } from "./functions.js";
import createBigButton from "./big-button.js";
import createEventItem from './event-item.js';

function createEventWrapper(data, mainTitle) {
    if (!data || !mainTitle) {
        return '';
    }
    
    const eventWrapper = createHTMLElement('div', 'event-wrapper');

    const eventTitle = createHTMLElement('h2', 'title', mainTitle);
    eventWrapper.append(eventTitle);

    data.forEach(item => {
        const eventItem = createEventItem(item);
        
        eventWrapper.append(eventItem);
    })

    const buttonBig = createBigButton('https://codeacademy.lt/event/', 'Daugiau');

    eventWrapper.append(buttonBig);

    return eventWrapper;
}

export default createEventWrapper;