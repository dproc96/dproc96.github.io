const tl = gsap.timeline({ paused: true, ease: Power2.easeOut });

const duration = .5

tl.to("#portfolio", {
    duration: 0,
    css: {
        display: "block"
    }
}).fromTo(".project__odd", {
    css: {
        opacity: 0,
        display: "block",
        right: "300px"
    }
}, {
        duration: duration,
        css: {
            opacity: 1,
            right: "0px"
        }
}).fromTo(".project__even", {
    css: {
        opacity: 0,
        display: "block",
        left: "300px"
    }
}, {
        duration: duration,
        css: {
            opacity: 1,
            left: "0px"
        }
}, `-=${duration}`).fromTo("#portfolio--header", {
    css: {
        opacity: 0,
        display: "block",
        top: "-50px"
    }
}, {
        duration: duration,
        css: {
            opacity: 1,
            top: "0px"
        }
}, `-=${duration}`);

$("#portfolio-open").click(() => {
    tl.play();
})

$("#close").click(() => {
    tl.reverse();
})