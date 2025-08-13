import './testing.css'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

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





let h1s = document.querySelectorAll(".about-home h1")
let lis = document.querySelectorAll(".about-home li")
lis.forEach(li => {
    let lisHeight = li.offsetHeight
    h1s.forEach(h1 => {
        h1.style.transform = `translateY(${lisHeight}px)`;
        gsap.to(h1, {
            y: 0,
            duration: 1,
            delay: 0.25,
            ease:"power4.out",
        })
    });
})







// split elements with the class "split" into words and characters
let split = SplitText.create(".about p", { type: "words, chars, lines" });
let about = document.querySelector(".about")
let aboutHeight = about.offsetHeight
// now animate the characters in a staggered fashion
gsap.from(split.lines, {
  duration: 1, 
  y: 50,       // animate from 100px below
  autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
  stagger: 0.125, // 0.05 seconds between each
  scrollTrigger: {
    trigger: '.about',
    pin: true, // pin the trigger element while active
	start: 'top top', // when the top of the trigger hits the top of the viewport
	end: `+=${aboutHeight}`, // end after scrolling 500px beyond the start
	scrub: 1,
    markers:true
  }
});


















