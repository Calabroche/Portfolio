/*Pour le chargement de la page */

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 2, stagger: 0.2 });
tl.to(".intro", { y: "-100%", duration: 2 });

/*image et texte portfolio


const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const headline = document.querySelector(".headline");

const tl = new TimelineMax();

tl.fromTo(hero, 1, { height: "0%" }, { height: "70%", ease: Power2.easeInOut })

.fromTo(
    hero, 
    1.2,
    { width : "100%"},
    { width: "70%", ease: Power2.easeInOut }
    ) 
.fromTo(slider, 1.2, { x: "-100%" }, { x: '0%', ease: Power2.easeInOut}, "-=1.2 ");
*/