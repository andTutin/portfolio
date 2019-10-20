const parallax = document.querySelector('.parallax'),
      layers = parallax.children,
      windowWidth = document.body.clientWidth;
if (windowWidth > 768) {
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        Array.from(layers).forEach((layer, index) => {
            if (index != 4) {
                const transformY = `${scrollY / (-(Array.from(layers).length - index) * 10)}%`;
                layer.style.transform = `translateY(${transformY})`;
            }
        })
    })
}