export function createHTMLElement(element, className, text) {
    const htmlElement = document.createElement(element);

    if (className) {
        htmlElement.classList.add(className);
    }
    
    if (text) {
        htmlElement.textContent = text
    }

    return htmlElement;
}



