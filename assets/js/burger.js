document.querySelector('.burger-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('body').classList.toggle('unscroll');
    document.querySelector('.navigation').classList.toggle('open');
})