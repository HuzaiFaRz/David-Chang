var shery = Shery.imageEffect(".page-back", {
  style: 5,

  config: {
    a: { value: 1.37, range: [0, 30] },
    b: { value: -0.95, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 2.047865459249677 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 1, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: false },
    maskVal: { value: 1, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: false },
    onMouse: { value: 1 },
    noise_speed: { value: 1.45, range: [0, 10] },
    metaball: { value: 0.14, range: [0, 2], _gsap: { id: 3 } },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 12.21, range: [0, 100] },
  },

  gooey: true,
});

var main = document.querySelector("main");
var headings = document.querySelectorAll(".headings");

headings.forEach(function (e) {
  var headingsanimation = false;
  var h1sIndex = 0;

  var h1s = e.querySelectorAll("h1");
  main.addEventListener("click", function () {
    if (!headingsanimation) {
      headingsanimation = true;
      gsap.to(h1s[h1sIndex], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
        onComplete: function () {
          gsap.set(this._targets[0], {
            top: "100%",
          });

          headingsanimation = false;
        },
      });

      if (h1sIndex === h1s.length - 1) {
        h1sIndex = 0;
      } else {
        h1sIndex++;
      }

      gsap.to(h1s[h1sIndex], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
      });
    }
  });
});
