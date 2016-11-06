(function() {
  var currentEpisode = null;
  var audio = null;

  function handleClick(element) {
    var id = element.dataset.id;
    showEpisode(id);
    playEpisode(id);
  }

  function unhighlightCurrentEpisode() {
    var item = document.querySelector('li.active');
    if (item) {
      item.className = '';
    }
  }

  function playEpisode(id) {
    stopCurrentEpisode();
    var player = document.getElementById('player');
    var playButton = document.querySelector('#episode-' + id + ' .play-button');
    var playButtonText = playButton.querySelector('i');
    player.src = playButton.dataset['url'];
    playButtonText.className = 'fa fa-pause-circle fa-fw fa-lg';
    player.play();
    player.onended = function() {
      stopCurrentEpisode();
      player.src = null;
    }
  }

  function stopCurrentEpisode() {
    var player = document.getElementById('player');
    player.pause();
    player.onended = null;
    var playButtonText = document.querySelector('.fa.fa-pause-circle');
    if (playButtonText) {
      playButtonText.className = 'fa fa-play-circle fa-fw fa-lg';
    }
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
