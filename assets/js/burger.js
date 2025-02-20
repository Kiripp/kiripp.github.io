document.querySelector('.burger-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('body').classList.toggle('unscroll');
    document.querySelector('.navigation').classList.toggle('open');
})

document.querySelectorAll('.navigation a').forEach(link => {
    link.addEventListener('click', function(event) {
        const linkPath = new URL(this.href, window.location.origin).pathname;
        const currentPath = window.location.pathname;

        if (linkPath === currentPath) {
            event.preventDefault(); // Отменяем перезагрузку страницы
            document.querySelector('.burger-menu').classList.remove('active');
            document.querySelector('body').classList.remove('unscroll');
            document.querySelector('.navigation').classList.remove('open');
        }
    });
});