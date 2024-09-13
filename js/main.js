window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content',
  smooth: 1,
  smoothTouch: 0.1,
  effects: true,
});

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
// ScrollSmoother.create({
//   wrapper: '.wrapper',
//   content: '.content',
//   smooth: 1,
//   smoothTouch: 0.1,
//   normalizeScroll: false,
//   effects: true,
// });


if (window.innerWidth > 768) {
  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1,
    effects: true,
  });
} else {
  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 0,
  });
}

