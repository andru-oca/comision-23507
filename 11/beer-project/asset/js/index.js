const header = document.querySelector("nav");
const main = document.querySelector("footer");

const options = {
    rootMargin: "-200px 0px 0px 0px",
};

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            header.classList.add("scrolled-nav");
        } else {
            header.classList.remove("scrolled-nav");
        }
    });
}, options);

observer.observe(main);
