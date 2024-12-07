document.addEventListener("DOMContentLoaded", function () {
  // Get the button and icon elements
  const toggleButton = document.getElementById("theme-toggle");
  const icon = document.getElementById("icon");

  // Check if dark mode is already applied in localStorage
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon"); // Set moon icon if dark mode is enabled
  }

  // Event listener for theme toggle
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Check if dark mode is active and update icon
    if (document.body.classList.contains("dark-mode")) {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon"); // Moon icon for dark mode
      localStorage.setItem("darkMode", "enabled");
    } else {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun"); // Sun icon for light mode
      localStorage.setItem("darkMode", "disabled");
    }
  });
});
