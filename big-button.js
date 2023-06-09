import { createHTMLElement } from "./functions.js";

function createBigButton(href, text) {
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


export default createBigButton;