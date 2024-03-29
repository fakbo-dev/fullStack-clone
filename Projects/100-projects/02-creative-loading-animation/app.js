gsap.fromTo(".box",
    { y: 0 },
    {
        y: -40,
        duration: 0.3,
        ease: "power1",
        stagger: {
            each: 0.1,
            from: "start",
            repeat: -1,
            yoyo: true,
        }
    }
);

