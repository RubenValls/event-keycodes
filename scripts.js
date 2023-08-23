const container = document.querySelector('.container')

const createElement = (element, key, span) => {
    const newElement = document.createElement(`${element}`);
    newElement.classList.add(key);
    newElement.innerHTML = `<span>${span}</span>`;
    return newElement;
}

onkeydown = (event) => {
    container.innerHTML = '';

    const keyElement = createElement('div', 'key', 'event.key');
    keyElement.innerHTML += event.key;
    container.appendChild(keyElement);

    const keyCodeElement = createElement('div', 'key', 'event.keyCode');
    keyCodeElement.innerHTML += event.keyCode;
    container.appendChild(keyCodeElement);

    const code = createElement('div', 'key', 'event.code');
    code.innerHTML += event.code;
    container.appendChild(code);
};