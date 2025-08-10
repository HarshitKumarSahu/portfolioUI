import './testing.css'

import gsap from 'gsap'

let svgs = document.querySelectorAll("svg");

svgs.forEach(svg => {
    svg.addEventListener("mouseenter", () => {
        gsap.to(svg, {
            fill: "orange"
        });
    })
    svg.addEventListener("mouseleave", () => {
        gsap.to(svg, {
            fill: "#363636"
        });
    })
});

let as = document.querySelectorAll("a");
as.forEach(a => {
    a.addEventListener("mouseenter", () => {
        gsap.to(a, {
            color: "orange"
        });
    })
    a.addEventListener("mouseleave", () => {
        gsap.to(a, {
            color: "#363636"
        });
    })
});

let btns = document.querySelectorAll("button");
btns.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        gsap.to(btn, {
            color: "orange",
            // duration: 1
            borderColor: "orange"
        });
    })
    btn.addEventListener("mouseleave", () => {
        gsap.to(btn, {
            color: "#363636",
            borderColor: "#363636"
        });
    })
});
