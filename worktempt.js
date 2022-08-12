gsap.registerPlugin(ScrollTrigger);

let loopNameAnim = document.querySelectorAll('.w-n')

console.log(loopNameAnim)


// gsap.from(loopNameAnim,{
//     y:150,
//     repeat: -1,
//     stagger:0.09,
//     duration: 1.5,
//     ease: "expo.out",
// })

let tlw = gsap.timeline({repeat:-1})


tlw .from(loopNameAnim,{y:-150, stagger:0.09, duration:1.5,ease: "expo.out",})
.to(loopNameAnim,{y:150, stagger: -0.09, duration:1.5,ease: "expo.in",})