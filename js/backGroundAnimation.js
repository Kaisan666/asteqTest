// Initialize GSAP timeline
const tl = gsap.timeline({ repeat: -1, yoyo: true });
tl.set({}, { delay: 2 });
// second
tl.to("#Ellipse18", {
  duration: 4,
  attr: { cx: "+=342", cy: "+=350" },
  ease: "power1.inOut"
});

// Animate the second circle
tl.to("#Ellipse19", {
  duration: 4,
  attr: { cx: "-=86", cy: "-=106" },
  ease: "power1.inOut"
}, "<");

// Animate the third circle
tl.to("#Ellipse20", {
  duration: 4,
  attr: { cx: "-=127", cy: "+=31", r: "-=741" },
  ease: "power1.inOut"
}, "<");

tl.to("#Ellipse21", {
  duration: 4,
  attr: { cx: "+=676", cy: "+=31", transform:"rotate(-12 1080.66 995.938)" },
  ease: "power1.inOut"
}, "<");

tl.to("#paint0_linear_270_467", {
  duration: 4,
  attr: { x1: "+=342.02", y1: "+=350", x2: "+=342", y2: "+=350" },
  ease: "power1.inOut"
}, "<");
tl.to("#paint1_linear_270_467", {
  duration: 4,
  attr: { x1: "-=86", y1: "-=106", x2: "-=86", y2: "-=106" },
  ease: "power1.inOut"
}, "<");
tl.to("#paint2_radial_270_467", {
  duration: 4,
  attr: { gradientTransform: "translate(394 254) rotate(134.865) scale(1108.94)" },
  ease: "power1.inOut"
}, "<");
tl.to("#paint3_linear_270_467", {
  duration: 4,
  attr: { x1: "+=676", y1: "-=144", x2: "+=676", y2: "-=144" },
  ease: "power1.inOut"
}, "<");
tl.set({}, { delay: 2 });

//third
tl.to("#Ellipse18", {
  duration: 4,
  attr: { cx: "-=342", cy: "-=350", transform:"rotate(-65 480.904 490.69)" },
  ease: "power1.inOut"
});

tl.to("#Ellipse19", {
  duration: 4,
  attr: { cx: "+=152.93", cy: "+=132.79", transform:"rotate(64 1187.93 491.79)" },
  ease: "power1.inOut"
}, "<");

tl.to("#Ellipse20", {
  duration: 4,
  attr: { cx: "+=362", cy: "+=168", r: "+=698" },
  ease: "power1.inOut"
}, "<");

tl.to("#Ellipse21", {
  duration: 4,
  attr: { cx: "-=820", cy: "-=852", transform:"rotate(-12 260.659 143.938)" },
  ease: "power1.inOut"
}, "<");

// Animate gradient offsets for a rolling effect
tl.to("#paint0_linear_270_467", {
  duration: 4,
  attr: { x1: "-=342.1", y1: "-=350", x2: "-=342.1", y2: "-=350" },
  ease: "power1.inOut"
}, "<");
tl.to("#paint1_linear_270_467", {
  duration: 4,
  attr: { x1: "+=152.92", y1: "+=132.78", x2: "+=153", y2: "+=132.8" },
  ease: "power1.inOut"
}, "<");
tl.to("#paint2_radial_270_467", {
  duration: 4,
  attr: { gradientTransform:"translate(756 422) rotate(134.865) scale(1987.53)" },
  ease: "power1.inOut"
}, "<");
tl.to("#paint3_linear_270_467", {
  duration: 4,
  attr: { x1: "-=820", y1: "-=852", x2: "-=820", y2: "+=816" },
  ease: "power1.inOut"
}, "<");
tl.set({}, { delay: 2 });


//fourth
tl.to("#Ellipse18", {
  duration: 4,
  attr: { cx: "+=259.096", cy: "+=289.31", r: "+=305" },
  ease: "power1.inOut"
});

tl.to("#Ellipse19", {
  duration: 4,
  attr: { cx: "-=58", cy: "-=304.79"},
  ease: "power1.inOut"
}, "<");

tl.to("#Ellipse20", {
  duration: 4,
  attr: { cx: "-=211", cy: "-=11", r: "-=909" },
  ease: "power1.inOut"
}, "<");

tl.to("#Ellipse21", {
  duration: 4,
  attr: { cx: "+=912", cy: "+=558", transform:"rotate(-12 1172.66 701.938)" },
  ease: "power1.inOut"
}, "<");

// Animate gradient offsets for a rolling effect
tl.to("#paint0_linear_270_467", {
  duration: 4,
  attr: { x1: "-=19.396", y1: "+=62.8759", x2: "+=552.28", y2: "+=433.99" },
  ease: "power1.inOut"
}, "<");
tl.to("#paint1_linear_270_467", {
  duration: 4,
  attr: { x1: "-=58.92", y1: "-=304.7891", x2: "-=58.926", y2: "-=304.79" },
  ease: "power1.inOut"
}, "<");
tl.to("#paint2_radial_270_467", {
  duration: 4,
  attr: { gradientTransform:"translate(545 411) rotate(134.865) scale(843.348)" },
  ease: "power1.inOut"
}, "<");
tl.to("#paint3_linear_270_467", {
  duration: 4,
  attr: { x1: "+=912", y1: "+=466.004", x2: "+=912", y2: "+=558" },
  ease: "power1.inOut"
}, "<");
tl.set({}, { delay: 2 });

//fifth
tl.to("#Ellipse18", {
  duration: 4,
  attr: { cx: "-=259", cy: "-=289", r: "-=305" },
  ease: "power1.inOut"
});

tl.to("#Ellipse19", {
  duration: 4,
  attr: { cx: "-=161", cy: "+=162", r:"+=162"},
  ease: "power1.inOut"
}, "<");

tl.to("#Ellipse20", {
  duration: 4,
  attr: { cx: "-=64", cy: "-=22", r: "+=668" },
  ease: "power1.inOut"
}, "<");

tl.to("#Ellipse21", {
  duration: 4,
  attr: { cx: "-=872", cy: "-=96", transform:"rotate(-12 300.659 605.938)" },
  ease: "power1.inOut"
}, "<");

// Animate gradient offsets for a rolling effect
tl.to("#paint0_linear_270_467", {
  duration: 4,
  attr: { x1: "+=19.492", y1: "-=62.5654", x2: "-=552.18", y2: "-=433.679" },
  ease: "power1.inOut"
}, "<");
tl.to("#paint1_linear_270_467", {
  duration: 4,
  attr: { x1: "-=5.96", y1: "+=84.1382", x2: "-=226.817", y2: "+=244.951" },
  ease: "power1.inOut"
}, "<");
tl.to("#paint2_radial_270_467", {
  duration: 4,
  attr: { gradientTransform:"translate(481 389) rotate(134.865) scale(1684.18)" },
  ease: "power1.inOut"
}, "<");
tl.to("#paint3_linear_270_467", {
  duration: 4,
  attr: { x1: "-=872", y1: "-=96", x2: "-=872", y2: "-=96" },
  ease: "power1.inOut"
}, "<");
tl.set({}, { delay: 2 });

//sixth
tl.to("#Ellipse18", {
  duration: 4,
  attr: {},
  ease: "power1.inOut"
});

tl.to("#Ellipse19", {
  duration: 4,
  attr: { cx: "+=161", cy: "-=162", r:"-=162"},
  ease: "power1.inOut"
}), "<";

tl.to("#Ellipse20", {
  duration: 4,
  attr: { cx: "+=339", cy: "+=153", r: "-=457" },
  ease: "power1.inOut"
}, "<");

tl.to("#Ellipse21", {
  duration: 4,
  attr: {},
  ease: "power1.inOut"
}, "<");

// Animate gradient offsets for a rolling effect
tl.to("#paint0_linear_270_467", {
  duration: 4,
  attr: {},
  ease: "power1.inOut"
}, "<");
tl.to("#paint1_linear_270_467", {
  duration: 4,
  attr: { x1: "+=5.96", y1: "-=84.1382", x2: "-=226.817", y2: "-=244.951" },
  ease: "power1.inOut"
}, "<");
tl.to("#paint2_radial_270_467", {
  duration: 4,
  attr: { gradientTransform:"translate(820 542) rotate(134.865) scale(1108.94)" },
  ease: "power1.inOut"
}, "<");
tl.to("#paint3_linear_270_467", {
  duration: 4,
  attr: {},
  ease: "power1.inOut"
}, "<");
tl.set({}, { delay: 2 });