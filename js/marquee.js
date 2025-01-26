const scrollers = document.querySelectorAll(".scroller")
const addAnimation = () =>{
    scrollers.forEach(scroller =>{
        scroller.setAttribute('data-animated', true)

    const scrollerInner = scroller.querySelector(".scroller__inner")
    const scrollerContent = Array.from(scrollerInner.children)

    console.log(scrollerContent)


    scrollerContent.forEach(item =>{
        const duplicatedItem = item.cloneNode(true)
        console.log(duplicatedItem)
        duplicatedItem.setAttribute('aria-hidden', true)
        scrollerInner.appendChild(duplicatedItem)
    })
    })
}
if (!window.matchMedia("(prefers-reduced-motion : reduce)").matches){
    addAnimation()
}



