const animPath = {
    curviness: 1.25,
    autoRotate: false,
    values: [
        {x:-200, y: 0},
        {x:-100, y: 20},
        {x:900, y: 0}
    ]
};

const animPath2 = {
    curviness: 1.25,
    autoRotate: false,
    values: [
        {x:200, y: 100},
        {x:100, y: 20},
        {x:-900, y: 0}
    ]
};

const animPath3 = {
    curviness: 1.25,
    autoRotate: false,
    values: [
        {x:-200, y: 0},
        {x:-100, y: 200},
        {x:800, y: 0}
    ]
};

const tween = new TimelineLite();
const tween2 = new TimelineLite();
const tween3 = new TimelineLite();
const tween4 = new TimelineLite();
const tween5 = new TimelineLite();
const tween6 = new TimelineLite();
const tween7 = new TimelineLite();
const tween8 = new TimelineLite();

tween.add(
    TweenLite.to("#Panel1M", 2, {
        bezier: animPath,
        ease: Power1.easeInOut
    })
);

tween2.add(
    TweenLite.to("#Panel2M", 2, {
        bezier: animPath2,
        ease: Power1.easeInOut
    })
);

tween3.add(
    TweenLite.to("#Panel3M", 2, {
        bezier: animPath3,
        ease: Power1.easeInOut
    })
);

tween4.add(
    TweenLite.to("#Panel4M", 2, {
        bezier: animPath,
        ease: Power1.easeInOut
    })
);

tween5.add(
    TweenLite.to("#Panel5M", 2, {
        bezier: animPath,
        ease: Power1.easeInOut
    })
);

tween6.add(
    TweenLite.to("#Panel6M", 2, {
        bezier: animPath,
        ease: Power1.easeInOut
    })
);

tween7.add(
    TweenLite.to("#Panel7M", 2, {
        bezier: animPath,
        ease: Power1.easeInOut
    })
);

tween8.add(
    TweenLite.to("#Panel8M", 2, {
        bezier: animPath,
        ease: Power1.easeInOut
    })
);

const controller1 = new ScrollMagic.Controller();
const controller2 = new ScrollMagic.Controller();
const controller3 = new ScrollMagic.Controller();
const controller4 = new ScrollMagic.Controller();
const controller5 = new ScrollMagic.Controller();
const controller6 = new ScrollMagic.Controller();
const controller7 = new ScrollMagic.Controller();
const controller8 = new ScrollMagic.Controller();

const scene1 = new ScrollMagic.Scene({
    triggerElement: '#IMG1',
    triggerHook: 0,
    duration: 300,

})
.setTween(tween)
.setPin("#IMG1")
.addTo(controller1);

const scene2 = new ScrollMagic.Scene({
    triggerElement: '#IMG2',
    triggerHook: 0,
    duration: 300,

})
.setTween(tween2)
.setPin("#IMG2")
.addTo(controller2);

const scene3 = new ScrollMagic.Scene({
    triggerElement: '#IMG3',
    triggerHook: 0,
    duration: 300,

})
.setTween(tween3)
.setPin("#IMG3")
.addTo(controller3);

const scene4 = new ScrollMagic.Scene({
    triggerElement: '#IMG4',
    triggerHook: 0,
    duration: 300,

})
.setTween(tween4)
.setPin("#IMG4")
.addTo(controller4);

const scene5 = new ScrollMagic.Scene({
    triggerElement: '#IMG5',
    triggerHook: 0,
    duration: 300,

})
.setTween(tween5)
.setPin("#IMG5")
.addTo(controller5);

const scene6 = new ScrollMagic.Scene({
    triggerElement: '#IMG6',
    triggerHook: 0,
    duration: 300,

})
.setTween(tween6)
.setPin("#IMG6")
.addTo(controller6);

const scene7 = new ScrollMagic.Scene({
    triggerElement: '#IMG7',
    triggerHook: 0,
    duration: 300,

})
.setTween(tween7)
.setPin("#IMG7")
.addTo(controller7);

const scene8 = new ScrollMagic.Scene({
    triggerElement: '#IMG8',
    triggerHook: 0,
    duration: 300,

})
.setTween(tween8)
.setPin("#IMG8")
.addTo(controller8);

var controller9 = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#IMG",
    triggerHook: 0.5,
    offset: 100, // move trigger to center of element
    reverse: false // only do once
})
.setClassToggle("#title", "visible") // add class toggle
.addTo(controller9);

var controller10 = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#IMG2",
    triggerHook: 0.5,
    offset: 50, // move trigger to center of element
    reverse: true // only do once
})
.setClassToggle("#speech1-1", "visible") // add class toggle
.addTo(controller10);

var controller11 = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#IMG2",
    triggerHook: 0.5,
    offset: 150, // move trigger to center of element
    reverse: true // only do once
})
.setClassToggle("#speech1-2", "visible") // add class toggle
.addTo(controller11);

var controller12 = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#IMG2",
    triggerHook: 0.5,
    offset: 250, // move trigger to center of element
    reverse: true // only do once
})
.setClassToggle("#speech1-3", "visible") // add class toggle
.addTo(controller12);

var controller13 = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#IMG3",
    triggerHook: 0.5,
    offset: 50, // move trigger to center of element
    reverse: true // only do once
})
.setClassToggle("#speech2-1", "visible") // add class toggle
.addTo(controller13);

var controller14 = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#IMG3",
    triggerHook: 0.5,
    offset: 150, // move trigger to center of element
    reverse: true // only do once
})
.setClassToggle("#speech2-2", "visible") // add class toggle
.addTo(controller14);

var controller15 = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#IMG3",
    triggerHook: 0.5,
    offset: 500, // move trigger to center of element
    reverse: true // only do once
})
.setClassToggle("#speech2-3", "visible") // add class toggle
.addTo(controller15);

var controller16 = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#IMG4",
    triggerHook: 0.5,
    offset: 50, // move trigger to center of element
    reverse: true // only do once
})
.setClassToggle("#speech3-1", "visible") // add class toggle
.addTo(controller16);

var controller17 = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#IMG4",
    triggerHook: 0.5,
    offset: 150, // move trigger to center of element
    reverse: true // only do once
})
.setClassToggle("#speech3-2", "visible") // add class toggle
.addTo(controller17);

var controller18 = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#IMG4",
    triggerHook: 0.5,
    offset: 250, // move trigger to center of element
    reverse: true // only do once
})
.setClassToggle("#speech3-3", "visible") // add class toggle
.addTo(controller18);

var controller19 = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#IMG5",
    triggerHook: 0.5,
    offset: 50, // move trigger to center of element
    reverse: true // only do once
})
.setClassToggle("#speech4-1", "visible") // add class toggle
.addTo(controller19);

var controller20 = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#IMG5",
    triggerHook: 0.5,
    offset: 150, // move trigger to center of element
    reverse: true // only do once
})
.setClassToggle("#speech4-2", "visible") // add class toggle
.addTo(controller20);

var controller21 = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#IMG5",
    triggerHook: 0.5,
    offset: 250, // move trigger to center of element
    reverse: true // only do once
})
.setClassToggle("#speech4-3", "visible") // add class toggle
.addTo(controller21);

var controller22 = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#IMG7",
    triggerHook: 0.5,
    offset: 150, // move trigger to center of element
    reverse: true // only do once
})
.setClassToggle("#speech5-1", "visible") // add class toggle
.addTo(controller22);

var controller23 = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#IMG7",
    triggerHook: 0.5,
    offset: 250, // move trigger to center of element
    reverse: true // only do once
})
.setClassToggle("#speech5-2", "visible") // add class toggle
.addTo(controller23);