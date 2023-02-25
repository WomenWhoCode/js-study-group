//select panels
const panels = document.querySelectorAll(".panel");

//add an event listener to open panel and remove the open class
// if were added in other panel
panels.forEach((currentPanel) => {
  currentPanel.addEventListener("click", () => {
    removeOpenClasses(currentPanel);
    currentPanel.classList.toggle("open");
  });
});

function removeOpenClasses(currentPanel) {
  panels.forEach((panel) => {
    if (panel != currentPanel) panel.classList.remove("open");
  });
}
