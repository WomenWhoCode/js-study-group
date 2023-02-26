const panels = document.querySelectorAll(".panel");

panels.forEach((currentPanel) => {
  currentPanel.addEventListener("click", () => {
    toggleOpenClasses(currentPanel);
    currentPanel.classList.toggle("open");
    currentPanel.addEventListener("transitionend", () => {
      currentPanel.classList.add("open-active");
    });
  });
});

function toggleOpenClasses(currentPanel) {
  panels.forEach((panel) => {
    if (panel != currentPanel) panel.classList.remove("open");
  });
}
