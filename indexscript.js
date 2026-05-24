document.querySelectorAll(".split-side").forEach((side) => {
  side.addEventListener("mouseenter", () => {
    side.classList.add("semfiltro");
  });

  side.addEventListener("mouseleave", () => {
    side.classList.remove("semfiltro");
  });
});