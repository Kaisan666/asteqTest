const numberToHundred = document.querySelectorAll(".number__100");
const numberToEighty = document.querySelector(".number__80");


const toHundred = [15, 47, 50, 11, 2, 65, 87, 22, 32, 100];
const toEighty = [2, 50, 47, 15, 11, 87, 65, 32, 22, 80];
let iteration = 0;

const changeNumber = () => {
    // gsap.to("#outerCircle", {
    //     duration : 4,
    //     attr : {
    //         d : "M143 0C221.977 0 286 64.0233 286 143C286 221.977 221.977 286 143 286C64.0233 286 0 221.977 0 143C0 64.0233 64.0233 0 143 0ZM143 244.509C199.062 244.509 244.509 199.062 244.509 143C244.509 86.9381 199.062 41.491 143 41.491C86.9381 41.491 41.491 86.9381 41.491 143C41.491 199.062 86.9381 244.509 143 244.509Z"
    //     }
    // })
    const numberInterval = setInterval(() => {
        if (numberToHundred.length > 0 && numberToEighty) {
            numberToHundred.forEach(number => {
                number.textContent = toHundred[iteration];
            });
            numberToEighty.textContent = toEighty[iteration];

            iteration += 1;
            if (iteration === toHundred.length) {
                clearInterval(numberInterval);
            }
        } else {
            console.error("Элементы не найдены!");
            clearInterval(numberInterval);
        }
    }, 150); 

};

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                changeNumber();
                observer.disconnect();
            }
        });
    },
    {
        threshold: 0.5,
    }
);


if (numberToEighty) {
    observer.observe(numberToEighty);
} else {
    console.error("Элемент .number__80 не найден!");
}

