document.addEventListener("DOMContentLoaded", () => {
    const portfolioText = document.getElementById("port-text");
    const vinatieText = document.getElementById("design-text");
    const container = document.querySelector("body");

    container.addEventListener("mousemove", (e) => {
        const rect = container.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        portfolioText.style.transform = `translate(${x * 15}px, ${y * 15}px)`;
        vinatieText.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
    });
});