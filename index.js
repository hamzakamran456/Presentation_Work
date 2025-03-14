const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabButtons.forEach((b) => b.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));

    btn.classList.add("active");
    const targetId = btn.getAttribute("data-target");
    document.getElementById(targetId).classList.add("active");
  });
});
