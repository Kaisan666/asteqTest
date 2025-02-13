document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelectorAll('.header__menu-button');
    const menu = document.querySelector('.menu');
    const body = document.body

    menuBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            menu.classList.toggle("active");
            body.classList.toggle("noScroll")
            menuBtn.forEach(button => {
                button.classList.toggle("active")
            })
        });
    });
});
