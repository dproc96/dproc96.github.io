const projects = {
    "xip-to": {
        title: "XiP-TO",
        github: "https://github.com/dproc96/UOFTCBC-project-two",
        link: "http://xip-to.herokuapp.com/",
        role: "Lead Front End Developer",
        description: "Built in 10 days. A web platform that allows user to share and interact with various experiences around Toronto.",
        image: "assets/images/xip-to.png"
    },
    moodomovie: {
        title: "Moodomovie",
        github: "https://github.com/JasperJRoth/MoodoMovie",
        link: "https://jasperjroth.github.io/MoodoMovie/",
        role: "Lead Algorithm Engineer",
        description: "Built in 10 days. A web application that recommends movies based on a plain English input by the user describing what kind of movie they want.",
        image: "assets/images/moodomovie.png"
    },
    starWars: {
        title: "Star Wars Combat",
        github: "https://github.com/dproc96/star-wars-combat",
        link: "https://dproc96.github.io/star-wars-combat/",
        role: "Solo Project",
        description: "A one on one single player fighting game with a basic AI based on the Star Wars Original Trilogy",
        image: "assets/images/starwars.png"
    },
    breakout: {
        title: "Breakout",
        github: "https://github.com/dproc96/Breakout",
        link: "https://dproc96.github.io/Breakout/",
        role: "Solo Project",
        description: "A version of the game breakout. This project was originally based on a tutorial that I used to teach myself but I altered it to my own preferences.",
        image: "assets/images/breakout.png"
    },
    trainScheduler: {
        title: "Train Scheduler",
        github: "https://github.com/dproc96/train-scheduler",
        link: "https://dproc96.github.io/train-scheduler/",
        role: "Solo Project",
        description: "A web application that uses Firebase and Moment.js to build a fictional train schedule that allows users to add trains with server-side persistance.",
        image: "assets/images/trainscheduler.png"
    },
    rps: {
        title: "Multiplayer Rock Paper Scissors",
        github: "https://github.com/dproc96/RPS-Multiplayer",
        link: "https://dproc96.github.io/RPS-Multiplayer/",
        role: "Solo Project",
        description: "A multiplayer game with user authentication that utilizes Firebase to allow games of rock paper scissors across devices (Note: to test on one computer you must open it in two browsers).",
        image: "assets/images/rps.png"
    },
    giftastic: {
        title: "Giftastic",
        github: "https://github.com/dproc96/giftastic",
        link: "https://dproc96.github.io/giftastic/",
        role: "Solo Project",
        description: "A web application for gathering and storing GIFs from the GIPHY API. Allows user to store favorites with client side data persistance.",
        image: "assets/images/giftastic.png"
    }
}

const $main = $("main");
const baseState = $main.html();

function writePortfolioItem(name) {
    $main.empty();
    let project = projects[name];
    let card = $("<div>");
    card.attr("class", "card card-large");
    card.attr("id", "project-card");
    let h3 = $("<h3>");
    h3.text(project.title);
    card.append(h3);
    let img = $("<img>");
    img.attr("src", project.image);
    card.append(img);
    let a1 = $("<a>");
    a1.attr("href", project.link);
    a1.text("View Deployment");
    a1.attr("target", "_blank");
    card.append(a1);
    let a2 = $("<a>");
    a2.attr("href", project.github);
    a2.text("View Github");
    a2.attr("target", "_blank");
    card.append(a2);
    let h4 = $("<h4>");
    h4.text("Role: " + project.role);
    card.append(h4);
    let p = $("<p>");
    p.text(project.description);
    card.append(p);
    let close = $("<button>");
    close.text("Close");
    close.attr("id", "close");
    card.append(close);
    $main.append(card);
}


$(document).on("click", ".portfolio-item", function() {
    writePortfolioItem($(this).attr("data-project"));
})

$(document).on("click", "#close", function() {
    $main.html(baseState);
})