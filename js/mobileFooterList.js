const footerButtons = document.querySelectorAll(".footer__list-button")
const menuButtons = document.querySelectorAll(".menu__list-button")


function accordion(buttons, listWrapper){
    buttons.forEach(button => {
        button.addEventListener("click", () =>{
            const listwrapper = button.closest(listWrapper)
            listwrapper.classList.toggle("active")
        })
    })
}

accordion(footerButtons, ".footer__list-wrapper")
accordion(menuButtons, ".menu__list-wrapper")