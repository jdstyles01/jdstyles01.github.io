(function () {
  const toggle = document.getElementById("themeToggle");
  const yearEl = document.getElementById("year");

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") {
    document.body.setAttribute("data-theme", saved);
    setIcon(saved);
  }

  function setIcon(theme) {
    toggle.innerHTML = theme === "dark"
      ? '<i class="fa-solid fa-sun"></i>'
      : '<i class="fa-solid fa-moon"></i>';
  }

  toggle.addEventListener("click", () => {
    const current = document.body.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";
    document.body.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setIcon(next);
  });
})();