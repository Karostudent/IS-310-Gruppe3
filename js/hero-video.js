(function () {
  var hero = document.querySelector('.home-hero');
  var video = document.getElementById('hero-video');
  var playBtn = document.getElementById('hero-play');
  if (!hero || !video || !playBtn) return;

  function showCaptions() {
    for (var i = 0; i < video.textTracks.length; i++) {
      video.textTracks[i].mode = 'showing';
    }
  }

  function start() {
    video.setAttribute('controls', '');
    video.setAttribute('tabindex', '-1');
    hero.classList.add('is-playing');
    showCaptions();

    var p = video.play();
    if (p && p.catch) {
      p.catch(function () { hero.classList.remove('is-playing'); });
    }
    video.focus();
  }

  playBtn.addEventListener('click', start);

  // Trykk på selve bildet starter videoen
  video.addEventListener('click', function () {
    if (!hero.classList.contains('is-playing')) start();
  });

  // Når videoen er ferdig, tilbake til forsidebildet
  video.addEventListener('ended', function () {
    hero.classList.remove('is-playing');
    video.removeAttribute('controls');
    video.load();
  });
})();