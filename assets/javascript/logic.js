const tl = gsap.timeline({ paused: true, ease: Power2.easeOut});
const tlSkills = gsap.timeline({ paused: true, ease: Power2.easeOut });

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

const direction = ["top", "bottom"]

tlSkills.to("#skills", {
    duration: 0,
    css: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateAreas: "'top other'",
        width: "100vw",
        height: "100vh"
    }
}).fromTo("#skills-top", {
    css: {
        opacity: 0,
        display: "flex",
        [direction[0]]: "300px"
    }
}, {
    duration: duration,
    css: {
        opacity: 1,
        [direction[0]]: "0px"
    }
}).fromTo("#skills-other", {
    css: {
        opacity: 0,
        display: "flex",
        [direction[1]]: "300px"
    }
}, {
    duration: duration,
    css: {
        opacity: 1,
        [direction[1]]: "0px"
    }
}, `-=${duration}`);

$("#portfolio-open").click(() => {
    tl.play();
})

$("#close").click(() => {
    tl.reverse();
})

$("#skills-open").click(() => {
    tlSkills.play();
})

$("#close-skills").click(() => {
    tlSkills.reverse();
})