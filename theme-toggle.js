// ============================================================
// 🌙 THE ULTIMATE WAVE – Dark Mode Toggle Script
// ------------------------------------------------------------
// Werkt op alle pagina’s met een element <div id="theme-toggle">
// - Onthoudt voorkeur van gebruiker via localStorage
// - Toont 🌙 of 🌞 icoon afhankelijk van huidige modus
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Als er geen toggle aanwezig is, stopt het script (veilig voor andere pagina's)
  if (!toggle) return;

  // ✅ Controleer of de gebruiker eerder dark mode heeft gekozen
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    toggle.textContent = "🌞"; // Zon tonen als dark mode actief is
  } else {
    toggle.textContent = "🌙"; // Maan tonen als light mode actief is
  }

  // 🖱️ Luistert naar klik op de toggle
  toggle.addEventListener("click", () => {
    const isDark = body.classList.toggle("dark-mode");
    toggle.textContent = isDark ? "🌞" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});
