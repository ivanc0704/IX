const collapseElementList = document.querySelectorAll('.collapse')
const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl))


gsap.registerPlugin(ScrollTrigger);

gsap.to(".title",{
    scrollTrigger:{
        trigger: "#bg",
        scrub: 1,
        pin:true
        
    },
    opacity:1,
});

