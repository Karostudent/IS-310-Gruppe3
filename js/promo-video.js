(function () {
  var trigger = document.querySelector('[data-play-video]');
  var video = document.getElementById('promo-video');
  if (!trigger || !video) return;

  // Lenken scroller til videoen. Avspillingen må starte i selve klikket,
  // fordi nettlesere bare tillater lyd etter en brukerhandling.
  trigger.addEventListener('click', function () {
    var p = video.play();
    if (p && p.catch) {
      // Blokkert? Da står videoen klar med kontroller, og brukeren trykker play selv.
      p.catch(function () {});
    }
  });
})();