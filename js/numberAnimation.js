const numberToHundred = document.querySelectorAll(".number__100");
const numberToEighty = document.querySelector(".number__80");


const toHundred = [15, 47, 50, 11, 2, 65, 87, 22, 32, 100];
const toEighty = [2, 50, 47, 15, 11, 87, 65, 32, 22, 80];
let iteration = 0;

const changeNumber = () => {
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

