import { SplitType } from "split-type";
import { gsap } from "gsap";

let text = new SplitType('#text');
let characters = document.querySelectorAll('.char');

for (i=0; i<characters.length; i++){
    characters[i].classList.add('translate-y-full');
}


gsap.to('char', {
    y: 0,
    stagger: 0.05,
    delay: 0.02,
    duration: 0.5
});