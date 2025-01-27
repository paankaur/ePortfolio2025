document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs and contents
    document
      .querySelectorAll(".tab")
      .forEach((t) => t.classList.remove("active", "large-tab"));
    document
      .querySelectorAll(".tab-content")
      .forEach((content) => content.classList.remove("active-content"));

    // Add active class to clicked tab and corresponding content
    tab.classList.add("active", "large-tab");
    const contentId = tab.getAttribute("data-tab");
    document.getElementById(contentId).classList.add("active-content");
  });
});
