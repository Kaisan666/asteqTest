const listButtons = document.querySelectorAll(".footer__list-button")
listButtons.forEach(listButton => {
    listButton.addEventListener("click", () =>{
        const listwrapper = listButton.closest(".footer__list-wrapper")
        listwrapper.classList.toggle("active")
    })
})