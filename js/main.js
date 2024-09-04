window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother) //регистрация плагина
ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content'
})