document.addEventListener("DOMContentLoaded", () => {
    const portfolioText = document.getElementById("portfolio-text");
    const designText = document.getElementById("design-text");
    const container = document.querySelector("main");

    container.addEventListener("mousemove", (e) => {
        const rect = container.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        portfolioText.style.transform = `translate(${x * 15}px, ${y * 15}px)`;
        designText.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
    });
});