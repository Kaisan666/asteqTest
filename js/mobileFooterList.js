const footerButtons = document.querySelectorAll(".footer__list-button")
const menuButtons = document.querySelectorAll(".menu__list-button")


function accordion(buttons, listWrapperName){
    buttons.forEach(button => {
        button.addEventListener("click", () =>{
            
            const listWrapper = button.closest(listWrapperName)
            if (listWrapper.classList.contains("active")){
                listWrapper.classList.remove("active")
            }
            
            else{
            const listsWrapper = document.querySelectorAll(listWrapperName)
            listsWrapper.forEach(elem => {
                elem.classList.remove("active")
            })
            listWrapper.classList.add("active")
        }
        })
    })
}

accordion(footerButtons, ".footer__list-wrapper")
accordion(menuButtons, ".menu__list-wrapper")