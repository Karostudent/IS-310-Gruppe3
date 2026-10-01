const navMenu = document.querySelector(".nav-menu");

if (navMenu) {
  const mobileNavQuery = window.matchMedia("(max-width: 767px)");

  function updateNavMenu() {
    navMenu.open = !mobileNavQuery.matches;
  }

  mobileNavQuery.addEventListener("change", updateNavMenu);
  updateNavMenu();
}

const logoLink = document.querySelector(".fixed-logo");

if (logoLink) {
  const logo = logoLink.querySelector("img");
  const hero = document.querySelector(".hero, .project-hero");
  let frameRequested = false;
  let showingSmallLogo = false;

  function updateLogo() {
    const progress = Math.min(window.scrollY / (window.innerHeight * 0.4), 1);
    const targetScale = 130 / logoLink.offsetWidth;
    const scale = 1 - (1 - targetScale) * progress;

    logoLink.style.transform = `scale(${scale})`;
    const shouldShowSmallLogo = progress > 0.82;

    if (shouldShowSmallLogo !== showingSmallLogo) {
      showingSmallLogo = shouldShowSmallLogo;
      logo.src = showingSmallLogo ? logo.dataset.smallLogo : logo.dataset.largeLogo;
    }

    const hasPersistentImageBackground = document.body.classList.contains("student-list-page") || document.body.classList.contains("student-page");
    const isProjectPage = document.body.classList.contains("project-page");
    const shouldUseLightLogo = isProjectPage || hasPersistentImageBackground || Boolean(hero && window.scrollY < hero.offsetHeight);

    logoLink.classList.toggle("logo-over-image", shouldUseLightLogo);
    frameRequested = false;
  }

  function requestLogoUpdate() {
    if (!frameRequested) {
      frameRequested = true;
      window.requestAnimationFrame(updateLogo);
    }
  }

  window.addEventListener("scroll", requestLogoUpdate, { passive: true });
  window.addEventListener("resize", requestLogoUpdate);
  updateLogo();
}