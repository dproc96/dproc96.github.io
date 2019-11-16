const tl = gsap.timeline({ paused: true, ease: Power1.easeInOut });

tl.to("#portfolio", {
    duration: 0,
    css: {
        display: "block"
    }
}).fromTo(".project__odd", {
    css: {
        opacity: 0,
        display: "block",
        right: "400px"
    }
}, {
        duration: 2,
        css: {
            opacity: 1,
            right: "0px"
        }
}).fromTo(".project__even", {
    css: {
        opacity: 0,
        display: "block",
        left: "400px"
    }
}, {
        duration: 2,
        css: {
            opacity: 1,
            left: "0px"
        }
}, "-=2").fromTo("#portfolio--header", {
    css: {
        opacity: 0,
        display: "block",
        top: "-50px"
    }
}, {
        duration: 2,
        css: {
            opacity: 1,
            top: "0px"
        }
}, "-=2");

$("#portfolio-open").click(() => {
    tl.play();
})

$("#close").click(() => {
    tl.reverse();
})