// style
import "../style/main.scss";
import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

// register scroll trigger
gsap.registerPlugin(ScrollTrigger)

// animation
const header = document.querySelector("#main-header") as HTMLElement; 
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: header,
        markers: true,
        start: "top",
        end: "bottom",
        scrub: 2,
    }
}).to(["#cloud1", "#cloud4"], {
    x: 1000,
    y: 100
}).to(["#cloud2", "#cloud3"], {
    x: -1000,
    y: 100
}, 0)