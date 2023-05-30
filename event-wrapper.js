import { createHTMLElement } from "./functions.js";

function createEventWrapper(data) {
    const eventWrapper = createHTMLElement('div', 'event-wrapper');

    const eventTitle = createHTMLElement('h2', 'title', 'Renginiai');
    eventWrapper.append(eventTitle);

    data.forEach(item => {
        let { img, day, month, title } = item;

        const eventItem = createHTMLElement('div', 'event-item');
        
        const linkToEvent = createHTMLElement('a');
        linkToEvent.href = '#';

        if (img) {
            const eventImg = createHTMLElement('img');
            eventImg.src = './' + img;
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

    const buttonBig = createHTMLElement('a');
    buttonBig.classList.add('button', 'big');
    buttonBig.href = 'https://codeacademy.lt/event/';
    buttonBig.innerHTML = 
    `<span>Daugiau</span>
    <svg class="arrow-blue" xmlns="http://www.w3.org/2000/svg" width="20" height="33"><path fill="#1200FF" d="M3.264 32.528L.76 30.026l13.761-13.761L.762 2.504 3.263 0l16.263 16.264z" fill-rule="evenodd"></path></svg>`;

    eventWrapper.append(buttonBig);

    return eventWrapper;
}

export default createEventWrapper;