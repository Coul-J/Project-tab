

gsap.registerPlugin(ScrollTrigger);


let preLoader = document.querySelector('.preloader')
console.log(preLoader)

window.addEventListener('load', () =>{
    preLoader.style.display = 'none'
})
//nav-igation functionality
let toggleClose = document.querySelector('.close')
let toggle = document.querySelector('.main-nav-toggle')
let navContainer = document.querySelector('.nav-container')
let navText = document.querySelector('.nav-text')
let mainContent = document.querySelector('#main')
let body = document.body
console.log(mainContent)

toggle.addEventListener('click', function (){
    navContainer.classList.add('active')
})
navContainer.addEventListener('click', ()=>{
    navContainer.classList.remove('active')
})


///Big title call outs
let textAnim = document.querySelectorAll("h1")
let textAnimInner = document.getElementsByClassName("text")
let textAnimInner2 = document.getElementsByClassName("text2")
let textAnimInner3 = document.getElementsByClassName("text3")
let textAnimInner4 = document.getElementsByClassName("text4")
let textAnimInner5 = document.getElementsByClassName("text5")
let textAnimInner6 = document.getElementsByClassName("text6")




// console.log(imgParralex1)

// // // data speed is a class you add to the HTML element.
// document.addEventListener("mousemove", parallax);
// function parallax(e){

//     const speed = imgParralex1.getAttribute('data-speed')

//     const x = (window.innerWidth - e.pageX*speed)/-200
//     const y = (window.innerHeight - e.pageY*speed)/-200

//     imgParralex1.style.transform = `translateX(${x}px) translateY(${y}px)`

// }



let changeCol = document.getElementById('change_col')
let icon = document.querySelector('svg')
console.log(icon)


changeCol.onclick = function () {
    document.body.classList.toggle('dark-mode')
}



//custom cursor 
const cursor = document.querySelector('.cursor');
const customCursor1 = document.querySelector('.cursor-drag ');
const footerCursor = document.querySelector('.footer-curs ');
const cursorContent = document.querySelector('.cursor-content');
let fpSection = document.getElementById('fp-container')
let footerHead = document.querySelector('.footer-header')
let customCursorPage = document.querySelector('.custom-cursor')
let defaultCursor00 = document.querySelector('.default-cursor00')
let defaultCursor = document.querySelector('.default-cursor')
let defaultCursor2 = document.querySelector('.default-cursor2')
let defaultCursor3 = document.querySelector('.default-cursor3')
let defaultCursor4 = document.querySelector('.default-cursor4')
let defaultCursor5 = document.querySelector('.default-cursor5')
let imageOverlay = document.querySelector('.overlay-img')

// body.addEventListener('mousemove', (e) => {
//     body.style.cursor = 'none'
// })

///Custom First page
customCursorPage.addEventListener('mousemove', (e) => {
    customCursor1.setAttribute("style", "top: "+(e.pageY -40)+"px; left: "+(e.pageX -50)+"px;" )
    // body.style.cursor ='none'
})
///nav cursor
defaultCursor00.addEventListener('mousemove', (e) => {
    cursor.setAttribute("style", "top: "+(e.pageY -40)+"px; left: "+(e.pageX -50)+"px;" )
    cursorContent.textContent = 'Hello'
})
///footer cursor
defaultCursor5.addEventListener('mousemove', (e) => {
    cursor.setAttribute("style", "top: "+(e.pageY -40)+"px; left: "+(e.pageX -50)+"px;" )
    cursorContent.textContent = 'Say Hi !'

})

///First page
defaultCursor.addEventListener('mousemove', (e) => {
    cursor.setAttribute("style", "top: "+(e.pageY -40)+"px; left: "+(e.pageX -50)+"px;" )
    cursorContent.textContent = 'Hello'
})
defaultCursor.addEventListener('click', (e) => {
    cursor.classList.add("expand");

    setTimeout(() =>{
        cursor.classList.remove("expand");
    }, 500)
})

///Second page
defaultCursor2.addEventListener('mousemove', (e) => {
    cursor.setAttribute("style", "top: "+(e.pageY -40)+"px; left: "+(e.pageX -50)+"px;" )
    cursorContent.textContent = 'The How'

})
defaultCursor2.addEventListener('click', (e) => {
    cursor.classList.add("expand");

    setTimeout(() =>{
        cursor.classList.remove("expand");
    }, 500)
})

///The next
defaultCursor3.addEventListener('mousemove', (e) => {
    cursor.setAttribute("style", "top: "+(e.pageY -40)+"px; left: "+(e.pageX -50)+"px;" )
    cursorContent.textContent = 'skills'

})
defaultCursor3.addEventListener('click', (e) => {
    cursor.classList.add("expand");

    setTimeout(() =>{
        cursor.classList.remove("expand");
    }, 500)
})

//the last default
defaultCursor4.addEventListener('mousemove', (e) => {
    cursor.setAttribute("style", "top: "+(e.pageY -40)+"px; left: "+(e.pageX -50)+"px;" )
    cursorContent.textContent = 'About'

})
defaultCursor4.addEventListener('click', (e) => {
    cursor.classList.add("expand");

    setTimeout(() =>{
        cursor.classList.remove("expand");
    }, 500)
})




// ///creates an animation with no duration
// gsap.set()

// //gsap timeline
// gsap.timeline()
//     .from("",{})
//     .from("",{})







// const section = document.getElementById("f-p")
// const options = { };
// const observer = new IntersectionObserver(function(entries, observer){
//     entries.forEach(entry => {
//         console.log(entry);
//     })
// } , options);

// observer.observe(section)




// /// Website color mode
// let isBlack = true


// /// Website Color mode
// function lightMode() {
//     if (isBlack === true) {
//         otherColors.style.background = "#252525"
//         container.style.background = "#8a8888"
//         container.style.color = "white"
//         isBlack = false
//     }else if(isBlack === false){
//         otherColors.style.background = "#8a8888"
//         container.style.background = "#252525"
//         container.style.color = "white"
//         isBlack = true
//     }

// }

let tl = gsap.timeline()

///gsap variables
let otherColors = document.getElementById('nav_links')
let container = document.getElementById('main')
// let bigSpan = document.getElementsByClassName('scroll-down');
let bigHeader = document.getElementsByClassName('span-text');
let wordHeader = document.getElementsByClassName('lerp-wrap');
let alignText = document.getElementsByClassName('align-left');
let textContainer = document.getElementsByClassName('landing-main-container');
let naV = document.getElementsByClassName('nav');
let naVigation = document.querySelector('.nav-igation');
let aboutText = document.querySelector('.the-text');
let serviceAnim = document.querySelectorAll('.s-anim')
let firstSlide = document.querySelectorAll('.top-slide-anim')
let sliceTwo = document.querySelectorAll('.center-text')



//scrollTrigger scrub working



gsap.to(bigHeader, {
    scrollTrigger: {
        end:"bottom+=200%",
        start:"top top",
        toggleActions: "play restart reverse reverse",
    },
    stagger: 0.019,
    opacity : 0, 
    duration: .5, 
    ease: "expo.out",}
    );

// gsap.from(appContainer, {
//     opacity : 0.5, 
//     duration: .5, 
//     x: 200, 
//     ease: "power3.out",}
//     );


//gsap timeline
tl  .from( naV,{y:-100, opacity:0, duration: 1, ease: "expo.out", delay: 1.5,})
    .from(firstSlide,{y:800, duration:1, opacity:0,skewY:-10,ease: "expo.out", })
    .from( bigHeader, {stagger: -0.08, opacity : 0, duration: .5, y: 500, rotate: 35, ease: "back", })
    .from( naVigation,{y:120,  duration: 0.5, ease: "expo.out", })
    .from( sliceTwo, { opacity:0,})

// tl.from(appContainer,{
//     scrollTrigger: {
//         trigger: ".approach-container",
//         end: "bottom top",
//         start: "top top",
//         markers: true,
//     },
//     x:200,  });


gsap.from(textAnimInner,{
    scrollTrigger: {
        trigger: '.text',
        end:"bottom+=800",
        start:"top bottom",
        toggleActions: "play restart none reset",

        // markers: true,
    },
    y: 200,
    stagger: 0.08,
    duration: .5,
    ease: "expo.easeInOut",

})
gsap.from(textAnimInner2,{
    scrollTrigger: {
        trigger: '.text2',
        end:"bottom+=800",
        start:"top bottom",
        toggleActions: "play restart none reset",

        // markers: true,
    },
    y: 200,
    stagger: 0.08,
    duration: .5,
    ease: "expo.easeInOut",

})
gsap.from(textAnimInner3,{
    scrollTrigger: {
        trigger: '.text3',
        end:"bottom+=800",
        start:"top bottom",
        toggleActions: "play restart none reset",

        // markers: true,
    },
    y: 200,
    stagger: 0.08,
    duration: .5,
    ease: "expo.easeInOut",

})
gsap.from(textAnimInner4,{
    scrollTrigger: {
        trigger: '.text4',
        end:"bottom+=800",
        start:"top bottom",
        toggleActions: "play restart none reset",

        // markers: true,
    },
    y: 150,
    opacity: 0.5,
    stagger: 0.2,
    duration: 1.5,
    ease: "expo.easeInOut",

})
gsap.from(textAnimInner5,{
    scrollTrigger: {
        trigger: '.text5',
        end:"bottom+=800",
        start:"top bottom",
        // toggleActions: "play restart none reset",

        // markers: true,
    },
    y: 200,
    stagger: 0.08,
    duration: .5,
    ease: "expo.easeInOut",

})
gsap.from(textAnimInner6,{
    scrollTrigger: {
        trigger: '.text6',
        end:"bottom+=800",
        start:"top bottom",
        toggleActions: "play restart none reset",

        // markers: true,
    },
    y: 200,
    stagger: 0.08,
    duration: .5,
    ease: "expo.easeInOut",

})
gsap.to(imageOverlay,{
    scrollTrigger: {
        trigger: '.overlay-img',
        end:"bottom center",
        start:"top =+100%",
        toggleActions: "play none none reset",

        // markers: true,
    },
    x: 1800,
    duration: 3,
    ease: "expo.easeOut",

})
gsap.from(aboutText,{
    scrollTrigger: {
        trigger: '.the-text',
        end:"bottom center",
        start:"top =+100%",
        toggleActions: "play none none none",

        // markers: true,
    },
    y: 100,
    opacity: 0,
    skewY: 5,
    duration: 1,
    ease: "expo.easeOut",

})
gsap.from(serviceAnim,{
    scrollTrigger: {
        trigger: '.s-anim',
        end:"bottom center",
        start:"top center",
        toggleActions: "play none none none",

        // markers: true,
    },
    y: 150,
    stagger: 0.2,
    skewX: 10,
    opacity: 0,
    duration: 1,
    ease: "expo.easeIn",

})









