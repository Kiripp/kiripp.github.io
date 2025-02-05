// Инициализация карты
let map;

function initMap() {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return; // Проверяем наличие контейнера с ID 'map'

    map = new ymaps.Map("map", {
        center: [52.093754, 23.685107], // Начальные координаты
        zoom: 11,
        controls: ['zoomControl', 'typeSelector']
    });

    // Массив с координатами и описанием точек
    // const contacts = [
    //     { coords: [52.088528, 23.694813], content: 'Офис продаж и администрация г. Брест, ул. Советская, 93-95' },
    //     { coords: [52.102766, 23.677686], content: 'Офис продаж г. Брест, ул. Республиканская, 10Б, пом. 55' }
    // ];

    const contacts = [
        { coords: [52.088528, 23.694813], 
            content: `
                <strong class="balloon_strong_text">Офис продаж и администрация г. Брест, ул. Советская, 93-95</strong><br>
                <p class="balloon_p_text">Режим работы:<br>
                Пн - Пт: 9:00 - 19:00<br>
                Сб: 9:00-15:00</p>
                <p class="balloon_p_text">Телефоны:<br>
                +375 162 53 14 18, <br>
                +375 162 53-14-22,<br>
                +375 162 53-22-99</p>
            ` },
        { coords: [52.102766, 23.677686], 
            content: `
                <strong class="balloon_strong_text">Офис продаж г. Брест, ул. Республиканская, 10Б, пом. 55</strong><br>
                <p class="balloon_p_text">Режим работы:<br>
                Пн - Пт: 9:00 - 19:00<br>
                Сб: 9:00-15:00</p>
                <p class="balloon_p_text">Телефоны:<br>
                +375 162 53 14 18, <br>
                +375 162 53-14-22,<br>
                +375 162 53-22-99</p>
            ` }
    ];

    // Добавление меток на карту
    contacts.forEach(contact => {
        const placemark = new ymaps.Placemark(contact.coords, { balloonContent: contact.content });
        map.geoObjects.add(placemark);
    });
}

function showDetails(contactId, coords) {
    const contactsList = document.getElementById('contacts-list');
    const contactDetails = document.getElementById('contact-details');
    const detailsContent = document.getElementById('details-content');

    contactsList.style.display = 'none';
    contactDetails.style.display = 'flex';

    if (contactId === 1) {
        detailsContent.innerHTML = `
            <p class="contacts_address">Офис продаж и администрация г. Брест, ул. Советская, 93-95</p>
            <p class="contacts_number">Режим работы: <br>Пн - Пт: 9:00 - 20:00</p>
            <p class="contacts_number">Cб: 9:00 - 18:00</p>
            <p class="contacts_number">Телефоны:<br>+375 33 603 94 94,<br>+375 162 40-77-00, 
            <br>+375 162 32-22-44, 
            <br>+375 162 35-05-07, 
            <br>+375 162 35-05-08.
            </p>
        `;
    } else if (contactId === 2) {
        detailsContent.innerHTML = `
            <p class="contacts_address">Офис продаж г. Брест, ул. Республиканская, 10Б, пом. 55</p>
            <p class="contacts_number">Режим работы: <br>Пн - Пт: 9:00 - 19:00<br>Сб: 9:00-15:00</p>
            <p class="contacts_number">Телефоны:<br>+375 162 53 14 18, <br>+375 162 53-14-22,<br>+375 162 53-22-99.</p>
        `;
    } else if (contactId === 3) {
        detailsContent.innerHTML = `
            <p class="contacts_address">Офис продаж г. Брест, ул. Дзержинского, 38</p>
            <p class="contacts_number">Режим работы: Пн - Пт: 8:30 - 17:00</p>
            <p class="contacts_number">Телефон: +375 33 625 94 94</p>
        `;
    }

    // Центрирование карты по координатам выбранного офиса
    setTimeout(() => {
        map.setCenter(coords, 16);
        map.container.fitToViewport();
    }, 1);
}

function closeDetails() {
    const contactsList = document.getElementById('contacts-list');
    const contactDetails = document.getElementById('contact-details');

    contactDetails.style.display = 'none';
    contactsList.style.display = 'flex';

    setTimeout(() => {
        map.setCenter([52.093754, 23.685107], 11);
        map.container.fitToViewport();
    }, 1);
}

// Проверка наличия API Yandex.Maps и вызов инициализации карты
if (typeof ymaps !== 'undefined') {
    ymaps.ready(initMap);
}