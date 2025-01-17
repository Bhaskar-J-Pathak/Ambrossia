const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)


var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".revealer",  
        start: "50% 50%",
        end: "150% 50%",
        scrub: 2,
        pin: true
    }
});

tl
.to(".center", {
    height: "100vh",
}, 'a')
.to(".top", {
    top: "-50%",
    force3D: false
}, 'a')
.to(".bottom", {
    bottom: "-50%",
    force3D: false
}, 'a')
.to(".toph", {  
    top: "90%",
    position: "fixed"  
}, 'a')
.to(".bottomh", {  
    bottom: "-90%",
    position: "fixed"
}, 'a')
