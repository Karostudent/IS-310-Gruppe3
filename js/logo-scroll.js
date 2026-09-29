const logoLink = document.querySelector(".fixed-logo");

if (logoLink) {
  const logo = logoLink.querySelector("img");
  const hero = document.querySelector(".hero");
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

    logoLink.classList.toggle("logo-over-image", Boolean(hero && window.scrollY < hero.offsetHeight));
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