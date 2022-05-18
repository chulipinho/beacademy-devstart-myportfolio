const swiper = new Swiper(".caseSwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
        rotate: 20,
        stretch: 50,
        depth: 50,
        modifier: 1,
        slideShadows: true,
    },
    pagination: false,
});
