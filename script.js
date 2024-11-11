gsap.from('.hmain h1, .hmain h3', {
    y: -100,
    duration: 1,
    opacity: 0,
    stagger: 0.2
});

gsap.from('.hmain h5', {
    opacity: 0,
    scale: 0
});

gsap.to('.hmain h5', {
    y: 20,
    repeat: -1,
    duration: 0.7,
    yoyo: true,

})

gsap.from('.page1', {
    y: -100,
    duration: 0.7,
    delay: 0.5,
    opacity: 0,
    scrollTrigger: ".page1"
});

gsap.from('.row', {
    y: -200,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: ".row"
});

gsap.from("#sgt", {
    x: -100,
    duration: 1,
    scrollTrigger: "#sgt"
});


gsap.from('.left, .right, .middle', {
    y: 100,
    duration: 0.5,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: ".left, .right, .middle"
})

document.addEventListener("DOMContentLoaded", function () {
    var images = document.getElementsByClassName("img rimg");

    for (var i = 0; i < images.length; i++) {
        images[i].addEventListener("mousemove", function () {
            this.style.transform = "scale(2)";
        });
    }
});



function clearerror() {
    let errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }
}

function seterror(id, error) {
    let element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateform() {
    let returnval = true;
    clearerror();

    let name = document.forms['myform']['name'].value;

    if (name.length < 3) {
        seterror('name', '* Length of your name is too short');
        returnval = false;
    }
    return returnval;
}