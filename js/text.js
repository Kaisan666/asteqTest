document.querySelectorAll('.description-card__button').forEach(button => {
    button.addEventListener('click', (e) => {
        const card = e.target.closest('.description-card');
        const text = card.querySelector('.description-card__text');
        const isOpen = text.classList.contains('full');
        console.log(isOpen)
        if (isOpen){
            text.classList.toggle("full2")
            text.classList.toggle("full1")
            text.classList.toggle("full")
        }
        else{
            text.classList.toggle("full")
            text.classList.toggle("full1")
            text.classList.toggle("full2")
        }
        
        // Меняем текст кнопки
        e.target.textContent = isOpen ? 'Продолжить' : 'Свернуть';
    });
});