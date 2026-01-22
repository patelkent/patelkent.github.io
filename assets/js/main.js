function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  if (menu) menu.classList.toggle("hidden");
}

function scrollToContact() {
  const section = document.getElementById("contact");
  if (section) section.scrollIntoView({ behavior: "smooth" });
}
