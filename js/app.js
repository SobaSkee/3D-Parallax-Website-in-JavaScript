const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0;
let yValue = 0;

let rotateDegree = 0;

function update(cursorPosition) {
    parallax_el.forEach(el => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        let rotationSpeed = el.dataset.rotation;
        // const forTest = document.querySelector(".mountain-2");
        let isInLeft = parseFloat(getComputedStyle(el).left) < (window.innerWidth / 2) ? 1 : -1;
        console.log(isInLeft);
        let zValue = (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.15;
        console.log(zValue);
        el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px)) perspective(2300px) translateZ(${zValue * speedz}px) rotateY(${rotateDegree * rotationSpeed}deg)`;
    });
}

update(0)

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2; // relative to the center of the window
    yValue = e.clientY - window.innerHeight / 2;
    rotateDegree = (xValue / (window.innerWidth / 2)) *20;

    update(e.clientX);
});

// parallax_el.forEach(el => {