const gifs = [
    "assets/images/Qoobee1.gif",
    "assets/images/Qoobee2.gif",
    "assets/images/Qoobee3.gif",
    "assets/images/Qoobee4.gif",
    "assets/images/Qoobee5.gif",
    "assets/images/Qoobee3.gif"
];

let noClickCount = 0;

document.getElementById("noBtn").addEventListener("click", function () {
    if (noClickCount < 5) {
        document.getElementById("gif").src = gifs[noClickCount + 1];
        noClickCount++;
    } else {
        document.getElementById("gif").src = gifs[5];
    }

    let noSound = new Audio("assets/audio/No.mp3");
    noSound.play();
});

document.getElementById("yesBtn").addEventListener("click", function () {
    let yesSound = new Audio("assets/audio/Yes.mp3");
    yesSound.play();

    document.getElementById("gif").src = "assets/images/Qoobee6.gif";

    setTimeout(() => {
        document.getElementById("gif").src = "assets/images/Qoobee7.gif";
        document.getElementById("letsGoBtn").style.display = "block";
    }, 2000);
});
