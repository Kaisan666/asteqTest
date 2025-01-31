document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptButton = document.querySelector('.accept-button');
    const circle1 = document.getElementById('circle1');
    const circle2Img = document.getElementById("circle2IMG");
    const circle2 = document.getElementById('circle2');
    const circle3 = document.getElementById('circle3');
    const html = document.documentElement;
    const secondSectionCirlesDescriptionsTitle = document.querySelectorAll(".second-section__cirles-descriptions-title");
    const secondSectionCirlesDescriptionsText = document.querySelectorAll(".second-section__cirles-descriptions-text");

    if (document.cookie.includes("cookieConsent")) {
        observeElements([circle1, circle2Img, circle2, circle3], () => {
            observeElements([...secondSectionCirlesDescriptionsTitle, ...secondSectionCirlesDescriptionsText]);
        });
    } else {
        observeElements([circle1, circle2Img], () => {
            cookieBanner.style.display = 'flex';
            cookieBanner.classList.add("active");
            html.classList.add('no-scroll');
        });
    }

    acceptButton.addEventListener('click', function() {
        setCookie('cookieConsent', 'true', 365);
        cookieBanner.classList.remove("active");
        cookieBanner.style.display = 'none';
        html.classList.remove('no-scroll');

        observeElements([circle2, circle3], () => {
            observeElements([...secondSectionCirlesDescriptionsTitle, ...secondSectionCirlesDescriptionsText]);
        });
    });

    function observeElements(elements, callback) {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 1
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                    if (elements.every(el => el.classList.contains('active')) && callback) {
                        callback();
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        elements.forEach(el => observer.observe(el));
    }
});

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}
