const button = document.getElementById("open-surprise");

const letter = document.getElementById("birthday-letter");

const confettiContainer = document.getElementById("confetti-container");


button.addEventListener("click", function() {

    // Prevent clicking the button repeatedly
    button.disabled = true;   
    
    // Create shiny green confetti
    createConfetti();

       
    // Reveal the letter after a short delay
    setTimeout(function() {

        letter.classList.add("show");

        // Scroll smoothly to the letter
        letter.scrollIntoView({
            behavior: "smooth"
        });

    }, 1500);

});


function createConfetti() {

    const colors = [
        "#0b5d3b",
        "#146b43",
        "#228b55",
        "#a5c66b",
        "#d4af37",
        "#064e3b"
    ];


    for (let i = 0; i < 120; i++) {

        const paper = document.createElement("div");

        paper.classList.add("confetti");

        // Random position
        paper.style.left = Math.random() * 100 + "%";

        // Random colour
        paper.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        // Shiny paper appearance
        paper.style.boxShadow =
            "0 0 6px rgba(255,255,255,0.35)";

        // Random falling speed
        paper.style.animationDuration =
            (4 + Math.random() * 5) + "s";

        // Different starting times
        paper.style.animationDelay =
            (Math.random() * 2) + "s";

        // Different sizes
        paper.style.width =
            (5 + Math.random() * 7) + "px";

        paper.style.height =
            (10 + Math.random() * 12) + "px";

        confettiContainer.appendChild(paper);

        // Remove paper after animation
        setTimeout(function() {
            paper.remove();
        }, 10000);

    }

}