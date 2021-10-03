gsap.to("#landscape", {
    scrollTrigger : {
      scrub : 1
    },
    scale : 1.1
  });

  gsap.to("#tebing", {
    scrollTrigger : {
      scrub : 1
    },
    scale : 1.3
  });

  gsap.to("#burung", {
    scrollTrigger : {
      scrub : 1
    },
    scale : 0.5,
    yPercent: 5,
    xPercent: 10
  });

  gsap.to("#awan-1", {
    scrollTrigger : {
      scrub : 1
    },
    scale : 2,
    yPercent: -10,
    xPercent: 5
  });

  gsap.to("#awan-2", {
    scrollTrigger : {
      scrub : 1
    },
    scale : 2,
    yPercent: -10,
    xPercent: 5
  });

  gsap.to("#awan-3", {
    scrollTrigger : {
      scrub : 1
    },
    scale : 2,
    yPercent: -10,
    xPercent: 5
  });

  gsap.to("#awan-4", {
    scrollTrigger : {
      scrub : 1
    },
    scale : 2,
    yPercent: -10,
    xPercent: 5
  });
  
  gsap.to("#matahari", {
    scrollTrigger : {
      scrub : 1
    },
    scale : 1.1,
    yPercent: 0,
    xPercent: -10,
    transformOrigin:"top right"
  });

  gsap.to("#text", {
    scrollTrigger : {
      scrub : 1
    },
    scale : 1.2,
    yPercent: -50,
    xPercent: 0,
    transformOrigin:"bottom"
  });

  gsap.to("#awan-kiri", {
    scrollTrigger : {
      scrub : 1,
    },
    scale : 1.7,
    yPercent: 0,
    xPercent: 20
  });

  gsap.to("#awan-kanan", {
    scrollTrigger : {
      scrub : 1,
    },
    scale : 1.7,
    yPercent: -15,
    xPercent: -15
  });

  gsap.to("#bg-awan", {
    scrollTrigger : {
      scrub : 1
    },
    scale : 1.3
  });


  var tl2 = new TimelineMax({ repeat: 1 })
    .to("#awan-1", 5, { xPercent: -5 })
    .to("#awan-1", 5, { xPercent: 0 })
    .repeat(-1);

  var tl2 = new TimelineMax({ repeat: 1 })
    .to("#awan-2", 5, { xPercent: 5 })
    .to("#awan-2", 5, { xPercent: 0 })
    .repeat(-1);

  var tl2 = new TimelineMax({ repeat: 1 })
    .to("#awan-3", 5, { xPercent: -5 })
    .to("#awan-3", 5, { xPercent: 0 })
    .repeat(-1);

  var tl2 = new TimelineMax({ repeat: 1 })
    .to("#awan-4", 5, { xPercent: 5 })
    .to("#awan-4", 5, { xPercent: 0 })
    .repeat(-1);

  var tl2 = new TimelineMax({ repeat: 1 })
    .to("#burung", 5, { xPercent: 1, yPercent: -1 })
    .to("#burung", 5, { xPercent: 0, yPercent: 0 })
    .repeat(-1);

  var tl2 = new TimelineMax({ repeat: 1 })
    .to("#landscape", 5, { xPercent: -1 })
    .to("#landscape", 5, { xPercent: 0 })
    .repeat(-1);

  let sl = gsap.timeline({
      scrollTrigger: {
          trigger: ".home"
      }
  });

  sl.from("#text", { y: 100, scale: 0.8 , opacity: 0, duration: 1.5})

  var tl2 = new TimelineMax({ repeat: 1 })
  .to("#blob-besar", 5, { scale: 1.1 })
  .to("#blob-besar", 5, { scale: 1 })
  .repeat(-1);

  var tl2 = new TimelineMax({ repeat: 1 })
  .to("#blob-sedang", 5, { xPercent: 20, yPercent: 10 })
  .to("#blob-sedang", 5, { xPercent: 0, yPercent: 0 })
  .repeat(-1);

  var tl2 = new TimelineMax({ repeat: 1 })
  .to("#blob-kecil", 5, { xPercent: -20, yPercent: -10 })
  .to("#blob-kecil", 5, { xPercent: 0, yPercent: 0 })
  .repeat(-1);

  var tl2 = new TimelineMax({ repeat: 1 })
  .to("#blob-paling-kecil", 5, { xPercent: -40, yPercent: -30 })
  .to("#blob-paling-kecil", 5, { xPercent: 0, yPercent: 0 })
  .repeat(-1);

  let tl = gsap.timeline({
      scrollTrigger: {
          trigger: ".about",
          start: "center bottom"
      }
  });

  tl.from(".blob", { x: -200, opacity: 0, duration: 1.5})
    .from(".text-about", {y: 300, opacity: 0, duration: 1}, "-=1")

  let tp = gsap.timeline({
      scrollTrigger: {
          trigger: ".transition",
          start: "top bottom"
      },
  });

  tp.from(".transition", { y: 200, opacity: 0, duration: 3})