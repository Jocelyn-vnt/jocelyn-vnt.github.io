      document.addEventListener("scroll", () => {
        const scrolled = window.scrollY;
        document.querySelectorAll(".parallax").forEach((element) => {
          const speed = parseFloat(element.getAttribute("data-speed"));
          element.style.transform = `translateY(${scrolled * speed}px)`;
        });
      });