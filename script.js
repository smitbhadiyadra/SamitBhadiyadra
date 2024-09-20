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

tl.from(".navRight a",{
    opacity: 0,
    y: 100,
    stagger: .1,
    duration: 1,
    delay: .1
},"a")

tl.from(".page1>.hero>.slider-container",{
    x: -100,
    duration: .5,
    opacity: 0,
    delay: 0.1
},"a")

tl.from(".page1 #text1",{
    x: 100,
    duration: 1,
    delay: 0.2,
    rotate: 3,
},"a")
tl.from(".hero #text2",{
    x: -100,
    duration: 1,
    delay: 0.2,
    rotate: 3,
},"a")
tl.from(".page1 #text3",{
    x: 100,
    duration: 1,
    delay: 0.2,
    rotate: 3,
},"a")

tl.from(".hero .links .box",{
    opacity: 0,
    y: 30,
    scale: .5,
    stagger: .1,
    duration: 1,
    delay: .4
},"a")

tl.from(".hero>span",{
    opacity: 0,
    y: 30,
    duration: .6,
    delay: 0.8
},"a")