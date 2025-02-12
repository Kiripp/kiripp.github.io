const mapElement = document.querySelector('.map');

document.addEventListener('click', (event) => {
    mapElement.classList.toggle(
        'is-active',
        event.target === mapElement
    );
});
