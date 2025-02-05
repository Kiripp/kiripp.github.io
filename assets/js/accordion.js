// Аккордеон
const accordionBlock = document.querySelector('#accordion');

if (accordionBlock) {
    accordionBlock.addEventListener('click', (event) => {
        const target = event.target;

        const closeAccordionItem = (el) => {
            el.classList.remove('accordion-item__heading-active');
            el.nextElementSibling.style.height = null;
        };

        if (target.classList.contains('accordion-item__heading')) {
            const siblingElement = target.nextElementSibling;
            if (target.classList.contains('accordion-item__heading-active')) {
                target.classList.remove('accordion-item__heading-active');
                siblingElement.style.height = null;
            } else {
                const openedItem = document.querySelector('.accordion-item__heading-active');
                if (openedItem) closeAccordionItem(openedItem);

                target.classList.add('accordion-item__heading-active');
                siblingElement.style.height = `${siblingElement.scrollHeight}px`;
            }
        }
    });
}
