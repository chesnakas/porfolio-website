const animWrapper = document.getElementById("animWrapper");
const container = document.getElementById("animContainer");
const textLarge = document.getElementById("textLarge");
const textSmall = document.getElementById("textSmall");
const headerContainer = document.getElementById("headerContainer");
const contentContainer = document.getElementById("contentContainer");
const footerContainer = document.getElementById("footerContainer");
const body = document.getElementsByTagName("body")[0];

const cards = document.querySelectorAll(".project");

//------------------------------------------------------------------------------------------
// Opening animations

const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

Velocity(container, { width: "5%", height: "20%" }, { duration: 300, easing: "ease-out", delay: 100});
Velocity(container, { width: "10%", height: "7%", borderRadius: "0" }, { duration: 250, easing: "linear"});
Velocity(container, { width: "100%" }, { duration: 600, easing: "ease-out"});
Velocity(container, { height: "100%"}, { duration: 1000, easing: "ease-out"});

if (viewportWidth >= 420) {
    Velocity(textLarge, { display: "inline", opacity: 1, fontSize: "40px"}, { duration: 400, easing: "ease-out", delay: 1850});
    Velocity(textSmall, { display: "inline", opacity: 1, fontSize: "25px"}, { duration: 400, easing: "ease-out", delay: 1850});
} else {
    Velocity(textLarge, { display: "inline", opacity: 1, fontSize: "10vw"}, { duration: 400, easing: "ease-out", delay: 1850});
    Velocity(textSmall, { display: "inline", opacity: 1, fontSize: "6vw"}, { duration: 400, easing: "ease-out", delay: 1850});
}

Velocity(animWrapper, { opacity: 0, display: "none" }, { duration: 500, delay: 3000, complete: function () {
    body.style.display = "block";
    headerContainer.style.display = "block";
    contentContainer.style.display = "block";
    footerContainer.style.display = "block";
}});
Velocity(body, {},{ duration: 0, delay: 3600, complete: function () {
    headerContainer.classList.add("translateToPlace");
    contentContainer.classList.add("translateToPlace");
}});

// -----------------------------------------------------------------------------------------------
// project cards sliding in from the side as you scroll

cardOptions = {
    threshold: 0,
    rootMargin: "0px 0px -200px 0px"
};

const cardOnScroll = new IntersectionObserver(function (entries, cardOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            cardOnScroll.unobserve(entry.target);
        }
    })
}, cardOptions);

cards.forEach(card => {
    cardOnScroll.observe(card);
})