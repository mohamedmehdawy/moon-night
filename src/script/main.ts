// style
import "../style/main.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// register scroll trigger
gsap.registerPlugin(ScrollTrigger);

// animation
const header = document.querySelector("#main-header") as HTMLElement;
const tl = gsap
    .timeline({
        scrollTrigger: {
            trigger: header,
            markers: true,
            start: "top",
            end: "bottom",
            scrub: 2,
            pin: true,
        },
    })
    .from(["#cloud1", "#cloud4"], {
        x: 1000,
        y: 100,
    })
    .from(
        ["#cloud2", "#cloud3"],
        {
            x: -1000,
            y: 100,
        },
        0
    )
    .from(
        ["#h1-9", "#h1-8"],
        {
            y: -80,
        },
        0
    )
    .from(
        "#h1-9",
        {
            x: 20,
        },
        0
    )
    .from(
        ["#h1-7", "#h1-6", "#h1-5", "#h1-4"],
        {
            y: -60,
        },
        "-=0.5"
    )
    .from(
        ["#h1-2", "#h1-1"],
        {
            y: -100,
        },
        "<-0.1"
    );

