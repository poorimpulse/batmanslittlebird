(function() {
  var currentEpisode = null;
  var audio = null;
  audiojs.events.ready(function () {
    audio = audiojs.create(document.getElementsByTagName('audio')[0], {

    });
  });

  function handleClick(element) {
    var id = element.dataset.id;
    showEpisode(id);
    setHeroUnit(id);
    // audio.load(element.dataset.src);
    // audio.play();
  }

  function unhighlightCurrentEpisode() {
    var item = document.querySelector('li.active');
    if (item) {
      item.className = '';
    }
  }

  function setHeroUnit(id) {
    var heroElement = document.getElementById('hero-' + id);
    var index = parseInt(heroElement.dataset.index);
    var heroViewport = heroElement.parentElement;
    var offset = (index+1) * 250;
    heroViewport.style.top = "" + (-offset + 16) + "px";
  }

  function showEpisode(id) {
    var linkElement = document.getElementById('episode-' + id);
    if (!currentEpisode) {
      unhighlightCurrentEpisode();
    } else {
      currentEpisode.className = '';
    }

    linkElement.className = 'active';
    currentEpisode = linkElement;
  }

  Array.prototype.forEach.call(
    document.getElementsByClassName('episodeLink'),
    function(element) {
      element.addEventListener('click', function (evt) {
        evt.preventDefault();
        handleClick(element);
      });
    }
  );
})();
