const parallaxScroll = document.querySelector('.parallax-scroll'),
      layers = parallaxScroll.children,
      windowWidth = document.body.clientWidth;
if (windowWidth > 768) {
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        Array.from(layers).forEach((layer, index) => {
            if (index !=0 && index != 4) {
                const transformY = `${scrollY / (-(Array.from(layers).length - index) * 7)}%`;
                layer.style.transform = `translateY(${transformY})`;
            }
        })
    })
}