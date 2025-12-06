// --- Entry Page Button ---
const goBtn = document.getElementById("goBtn");
if (goBtn) {
  goBtn.addEventListener("click", () => {
    alert("Welcome to Manolo Discovery!");
    window.location.href = "home.html";
  });
}

// --- Sidebar Menu Toggle (Home & About Pages) ---
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeBtn");

if (menuBtn && sidebar && closeBtn) {
  menuBtn.addEventListener("click", () => {
    sidebar.classList.add("open");
  });

  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
  });
}

// --- Sidebar Navigation Links ---
const homeLink = document.getElementById("homeLink");
const aboutLink = document.getElementById("aboutLink");
const brgyLink = document.getElementById("brgyLink");
const devLink = document.getElementById("devLink");
const exitLink = document.getElementById("exitLink");

// Go to Home Page
if (homeLink) {
  homeLink.addEventListener("click", () => {
    window.location.href = "home.html";
  });
}

// Go to About Page
if (aboutLink) {
  aboutLink.addEventListener("click", () => {
    window.location.href = "about.html";
  });
}

// Barangay's Page (future link)
if (brgyLink) {
  brgyLink.addEventListener("click", () => {
    alert("Barangay's Page Coming Soon!");
  });
}

// Developers Page (future link)
if (devLink) {
  devLink.addEventListener("click", () => {
    alert("Developers Page Coming Soon!");
  });
}

// Exit Button - Back to Entry Page
if (exitLink) {
  exitLink.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}