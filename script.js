const bg = document.querySelector(".bg");
let ticking = false;

window.addEventListener("scroll", () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrollTop = window.scrollY;
            const geschwindigkeit = 0.075;

            bg.style.transform = `translateY(${-scrollTop * geschwindigkeit}px)`;

            ticking = false;
        });
        ticking = true;
    }
});