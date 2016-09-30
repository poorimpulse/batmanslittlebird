function attachAudio(id, url, duration) {
  var element = document.querySelector("#episode-" + id + " audio");
  element.src = url;
  element.duration = duration;
}

(function () {
  var selectedEpisodeId = null;

  function hideEpisode(element) {
    if (!element) {
      return;
    }

    element.className = "";
  }

  function showEpisode(element) {
    element.className = 'latest';
  }

  function handleClick(link) {
    var id = link.dataset.id;
    var url = link.dataset.audio;
    var duration = link.dataset.duration;
    var previousElement = document.getElementById('episode-'+selectedEpisodeId);
    var element = document.getElementById('episode-'+id);

    if (!previousElement) {
      previousElement = document.getElementsByClassName('latest')[0];
    }

    hideEpisode(previousElement);
    showEpisode(element);
    attachAudio(id, url, duration);
    selectedEpisodeId = id;
  }

  var episodeLinks = document.getElementsByClassName('episodeLink');
  firstEpisode();
  Array.prototype.forEach.call(episodeLinks,
    function (x) {
      x.addEventListener('click', function (evt) {
        evt.preventDefault();
        handleClick(evt.target);
      });
  });
})();