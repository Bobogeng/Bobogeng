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

  "use strict";
var testim = document.getElementById("testim"),
  testimDots = Array.prototype.slice.call(
    document.getElementById("testim-dots").children
  ),
  testimContent = Array.prototype.slice.call(
    document.getElementById("testim-content").children
  ),
  testimLeftArrow = document.getElementById("left-arrow"),
  testimRightArrow = document.getElementById("right-arrow"),
  testimSpeed = 4500,
  currentSlide = 0,
  currentActive = 0,
  testimTimer,
  touchStartPos,
  touchEndPos,
  touchPosDiff,
  ignoreTouch = 30;
window.onload = function () {
  // Testim Script
  function playSlide(slide) {
    for (var k = 0; k < testimDots.length; k++) {
      testimContent[k].classList.remove("active");
      testimContent[k].classList.remove("inactive");
      testimDots[k].classList.remove("active");
    }

    if (slide < 0) {
      slide = currentSlide = testimContent.length - 1;
    }

    if (slide > testimContent.length - 1) {
      slide = currentSlide = 0;
    }

    if (currentActive != currentSlide) {
      testimContent[currentActive].classList.add("inactive");
    }
    testimContent[slide].classList.add("active");
    testimDots[slide].classList.add("active");

    currentActive = currentSlide;

    clearTimeout(testimTimer);
    testimTimer = setTimeout(function () {
      playSlide((currentSlide += 1));
    }, testimSpeed);
  }

  testimLeftArrow.addEventListener("click", function () {
    playSlide((currentSlide -= 1));
  });

  testimRightArrow.addEventListener("click", function () {
    playSlide((currentSlide += 1));
  });

  for (var l = 0; l < testimDots.length; l++) {
    testimDots[l].addEventListener("click", function () {
      playSlide((currentSlide = testimDots.indexOf(this)));
    });
  }

  playSlide(currentSlide);

  // keyboard shortcuts
  document.addEventListener("keyup", function (e) {
    switch (e.keyCode) {
      case 37:
        testimLeftArrow.click();
        break;

      case 39:
        testimRightArrow.click();
        break;

      case 39:
        testimRightArrow.click();
        break;

      default:
        break;
    }
  });

  testim.addEventListener("touchstart", function (e) {
    touchStartPos = e.changedTouches[0].clientX;
  });

  testim.addEventListener("touchend", function (e) {
    touchEndPos = e.changedTouches[0].clientX;

    touchPosDiff = touchStartPos - touchEndPos;

    console.log(touchPosDiff);
    console.log(touchStartPos);
    console.log(touchEndPos);

    if (touchPosDiff > 0 + ignoreTouch) {
      testimLeftArrow.click();
    } else if (touchPosDiff < 0 - ignoreTouch) {
      testimRightArrow.click();
    } else {
      return;
    }
  });
};
