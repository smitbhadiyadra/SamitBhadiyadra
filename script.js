function locoMotive(){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}
locoMotive()


tl = gsap.timeline()

tl.from("nav>.navRight>a",{
    opacity: 0,
    stagger: .1,
    duration: .5,
    delay: .1
},"a")

tl.from(".page1>.hero>.slider-container",{
    x: -100,
    duration: .5,
    opacity: 0,
    delay: 0.1
},"a")

