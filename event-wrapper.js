import { createBigButton, createHTMLElement } from "./functions.js";

function createEventWrapper(data, mainTitle) {
    if (!data || !mainTitle) {
        return '';
    }
    
    const eventWrapper = createHTMLElement('div', 'event-wrapper');

    const eventTitle = createHTMLElement('h2', 'title', mainTitle);
    eventWrapper.append(eventTitle);

    data.forEach(item => {
        let { img, day, month, title } = item;

        const eventItem = createHTMLElement('div', 'event-item');
        
        const linkToEvent = createHTMLElement('a');
        linkToEvent.href = '#';

        if (img) {
            const eventImg = createHTMLElement('img');
            eventImg.src = 'assets/' + img;
            linkToEvent.append(eventImg);
        }

        const eventContent = createHTMLElement('div', 'event-content');
        
        const eventDate = createHTMLElement('div', 'event-date');
        const eventDay = createHTMLElement('span', 'event-day', day);
        const eventMonth = createHTMLElement('span', 'event-month', month);
        eventDate.append(eventDay, eventMonth);

        const eventInfo = createHTMLElement('div', 'event-info');
        const eventTitle = createHTMLElement('h3', 'event-card-title', title);
        eventInfo.append(eventTitle);

        eventContent.append(eventDate, eventInfo);
        linkToEvent.append(eventContent);
        eventItem.append(linkToEvent);
        eventWrapper.append(eventItem);
    })

    const buttonBig = createBigButton('https://codeacademy.lt/event/', 'Daugiau');

    eventWrapper.append(buttonBig);

    return eventWrapper;
}

export default createEventWrapper;