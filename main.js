document.addEventListener('DOMContentLoaded',() =>{
anime({
    targets:'.logo',
    translateX:[-200, 0],
    easing:'easeOutExpo',
    duration:1000,
    delay:1000,
    opacity:[0,1],
})
anime({
    targets:' nav a',
    translateY:[-50,0],
    easing:'easeOutExpo',
    duration:1200,
    delay:(el, i) => {
        return 1100 + 100 * i;
    },
    opacity:[0,1],
})


anime({
    targets:'.diamond',
    top:40,
    easing:'easeOutExpo',
    duration:1000,
    delay:(el, i) => {
        return 1000 + 100 * i;
    },
    opacity:[0,1],
})


anime({
    targets:'.col-1',
    translateX: 150,
    height: "80px",
    width: "80px",
    duration: 2000,
    easing: "linear",
    
directio:"alternate",

 
loop: true,
})

anime({
    targets:'.col-2',
    translateX:[-200, 0],
    easing:'easeOutExpo',
    duration:1000,
    delay:1700,
    opacity:[0,1],
})

})