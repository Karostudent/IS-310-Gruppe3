(function () {
  var trigger = document.querySelector('[data-play-video]');
  var video = document.getElementById('promo-video');
  if (!video) return;

  // Når videoen er ferdig, vis forsidebildet (posteren) igjen
  video.addEventListener('ended', function () {
    video.load();
  });

  if (!trigger) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  trigger.addEventListener('click', function () {
    // Ber brukeren om mindre bevegelse: scroll til videoen, men la dem starte selv
    if (!reduceMotion.matches) {
      var p = video.play();
      if (p && p.catch) {
        p.catch(function () {});
      }
    }
    // Fokus til videoen, så Mellomrom pauser/spiller av med en gang
    video.focus({ preventScroll: true });
  });
})();