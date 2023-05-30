import { createBigButton, createHTMLElement } from "./functions.js";

function createVideoWrapper() {
    const videoWrapper = createHTMLElement('div', 'video-wrapper');

    videoWrapper.innerHTML = 
    `<h2 class="title">Vaizdo įrašai</h2>
    <iframe class="video-item" width="560" height="315" src="https://www.youtube.com/embed/b8dGCsP75HA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="">
    </iframe>
    <p class="motto">Jei galiu aš - gali ir tu!</p>`;

    const bigButton = createBigButton('https://codeacademy.lt/visos-naujienos/', 'Visi vaizdo įrašai');
    videoWrapper.append(bigButton);

    return videoWrapper;
}

export default createVideoWrapper;