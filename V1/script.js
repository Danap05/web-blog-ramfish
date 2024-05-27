var slider = new slider('.slider', {
    effect: 'coverflow',
    grabCursor: true,
    centerredSlides:true,
    sliderPerView: 'auto',
    coverflowEffect: {
        rotate: 15,
        strech: 0,
        depth: 300,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
})