import { createHTMLElement } from "./functions.js";

function createVideoWrapper() {
    const videoWrapper = createHTMLElement('div', 'video-wrapper');

    videoWrapper.innerHTML = 
    `<h2 class="title">Vaizdo įrašai</h2>
    <iframe class="video-item" width="560" height="315" src="https://www.youtube.com/embed/b8dGCsP75HA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="">
    </iframe>
    <p class="motto">Jei galiu aš - gali ir tu!</p>`;

    const bigButton = createHTMLElement('a');
    bigButton.classList.add('button', 'big');
    bigButton.href = 'https://codeacademy.lt/visos-naujienos/';

    bigButton.innerHTML = 
    `<span>Visi vaizdo įrašai</span>
    <svg class="arrow-blue" xmlns="http://www.w3.org/2000/svg" width="20" height="33"><path fill="#1200FF" d="M3.264 32.528L.76 30.026l13.761-13.761L.762 2.504 3.263 0l16.263 16.264z" fill-rule="evenodd"></path></svg>`;


    videoWrapper.append(bigButton);

    return videoWrapper;
}

export default createVideoWrapper;