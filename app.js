const music = {
    mainMusic: new Howl({
        src: ["/public/energizer.mp3"],
        sprite: {
            beg: [0, 3800],
            mid: [7600, 7600],
        },
        autoplay: false,
    }),
};
// button to run music and animation
const startButton = document.querySelector(".btn");
// first body
const fpBody = document.querySelector(".first-person");
const fpBackLeg = document.querySelector(".fp-back-leg");
const fpFrontLeg = document.querySelector(".fp-front-leg");
const fpBackArm = document.querySelector(".fp-back-arm");
// second body
const spBody = document.querySelector(".second-person");
const spFrontLeg = document.querySelector(".sp-front-leg");
const spBackLeg = document.querySelector(".sp-back-leg");
// third body
const tpBody = document.querySelector(".third-person");
const tpFrontLeg = document.querySelector(".tp-front-leg");
const tpBackLeg = document.querySelector(".tp-back-leg");
// text
const hi = document.querySelector(".hi");
const im = document.querySelector(".im");
const coach = document.querySelector(".coach");
const chelsea = document.querySelector(".chelsea");
// timelines
const runOne = gsap.timeline();
const runTwo = gsap.timeline();
const runThree = gsap.timeline();
const runText = gsap.timeline();

// play animation & music (2 different sections of song to shorten length)
startButton.addEventListener("click", () => {
    if (!music.mainMusic.playing()) {
        music.mainMusic.play("beg");
        setTimeout(() => {
            music.mainMusic.play("mid");
        }, 3800);
        animationRun();
    }
});

// animation methods
const animationRun = () => {
    runOne
        // first person left to center
        .from(fpBody, { duration: 4, x: -680, ease: "power2" }, "firstperson")
        // first person center to right
        .to(fpBody, { duration: 4, x: 1300, ease: "power1" }, "firstperson")
        .to(fpFrontLeg, { duration: 4, x: 7, ease: "power2" }, "firstperson")
        .to(fpBackLeg, { duration: 4, x: 100, ease: "power2" }, "firstperson")
        // first person up
        .to(fpBody, { duration: 1, y: -65, ease: "power1" }, "firstperson")
        .to(fpFrontLeg, { duration: 1, y: -9, ease: "power1" }, "firstperson")
        // first person down
        .to(fpBody, { duration: 1.5, y: -15, ease: "power1" }, "firstperson+=2")
        .to(fpFrontLeg, { duration: 2, y: -15 }, "firstperson+=.5")
        // first person back leg clockwise rotation
        .to(
            fpBackLeg,
            {
                duration: 5,
                rotation: 50,
                transformOrigin: "95% 5%",
                ease: "power2",
            },
            "firstperson"
        )
        // first person back arm clockwise rotation
        .to(
            fpBackArm,
            {
                duration: 4,
                rotation: 20,
                transformOrigin: "99% 1%",
                ease: "power2",
            },
            "firstperson"
        )
        // first person front leg counter clockwise rotation
        .to(
            fpFrontLeg,
            {
                duration: 4,
                rotation: -20,
                transformOrigin: "99% 1%",
                ease: "power2",
            },
            "firstperson"
        );

    runTwo
        // second person left to center
        .from(spBody, { duration: 6, x: -1150, ease: "power2" }, "secondperson")
        // second person center to right
        .to(spBody, { duration: 5.5, x: 850, ease: "power2" }, "secondperson")
        .to(spBackLeg, { duration: 4, x: 30, ease: "power2" }, "secondperson")
        // second person back leg clockwise rotation
        .to(
            spBackLeg,
            {
                duration: 4.2,
                rotation: 45,
                transformOrigin: "95% 5%",
                ease: "power2",
            },
            "secondperson"
        )
        // second person front leg counter clockwise rotation
        .to(
            spFrontLeg,
            {
                duration: 4,
                x: -1,
                y: -35,
                rotation: -25,
                transformOrigin: "99% 1%",
                ease: "power2",
            },
            "secondperson"
        )
        // make sure second person does not come back on screen after animation
        .to(spBody, { opacity: 0 }, "secondperson+=4");

    runThree
        // third person left to center
        .from(tpBody, { duration: 4, x: -1500, ease: "power2" }, "thirdperson")
        // third person down
        .to(
            tpBody,
            { duration: 4, y: 80, ease: Power2.easeInOut },
            "thirdperson"
        )
        // third person center to right
        .to(tpBody, { duration: 4.8, x: 850, ease: "power1" }, "thirdperson")
        // third person front leg counter clockwise rotation
        .to(
            tpFrontLeg,
            {
                duration: 4,
                x: -85,
                y: -117,
                rotation: -65,
                transformOrigin: "99% 1%",
                ease: "power3",
            },
            "thirdperson"
        )
        // third person back leg clockwise rotation
        .to(
            tpBackLeg,
            {
                duration: 5,
                y: -40,
                rotation: 80,
                transformOrigin: "80% 20%",
                ease: "power2",
            },
            "thirdperson"
        );

    runText
        // text appears
        .from(
            hi,
            { duration: 0.15, x: -800, ease: "power4" },
            "thirdperson+=1.7"
        )
        .from(im, { duration: 0.15, x: -800, ease: "power4" })
        .from(coach, { duration: 0.16, x: -800, ease: "power4" })
        .from(chelsea, { duration: 0.16, x: -800, ease: "power4" })
        // text size increase
        .to(hi, { duration: 0.1, scale: 2, ease: "power4" }, "thirdperson+=1.8")
        .to(im, { duration: 0.1, scale: 2, ease: "power4" }, "thirdperson+=1.8")
        .to(
            coach,
            { duration: 0.1, scale: 2, ease: "power4" },
            "thirdperson+=1.8"
        )
        .to(
            chelsea,
            { duration: 0.1, scale: 2, ease: "power4" },
            "thirdperson+=1.8"
        )
        // text movements
        .to(im, { duration: 0.3, scale: 1, ease: "expo" }, 3)
        .to(hi, { duration: 0.3, scale: 2, opacity: 0, ease: "power4" })
        .to(coach, { duration: 0.3, scale: 2, x: 37, ease: "expo" })
        .to(im, { duration: 0.3, scale: 2, opacity: 0, ease: "expo" })
        .to(".intro-text", {
            duration: 0.2,
            margin: "0 50%",
            lineHeight: 3,
        })
        .to(coach, { duration: 0.5, x: -60, y: -200, scale: 4, ease: "expo" })
        .to(chelsea, {
            duration: 0.3,
            x: -98,
            y: -150,
            scale: 3.2,
            ease: "power4",
        })
        // white box appears
        .from(".top-box", { opacity: 0 })
        .to(".top-box", {
            duration: 0.4,
            opacity: 1,
            yPercent: -50,
            height: 700,
            ease: "power2",
        })
        // text and background swap colors
        .to(".last-text", {
            backgroundPosition: "left",
            color: "white",
        })
        .to(".last-text", {
            backgroundPosition: "right",
            color: "black",
        })
        // cursor was showing after linear-gradient fx, this is a temporary fix
        .to(".cover-up", {
            display: "block",
        });
};
