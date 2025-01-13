export function renderVideoPlayer(video) {
  const player = document.createElement('div');
  player.className = 'video-player';
  player.innerHTML = `
    <video controls>
      <source src="${video.url}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  `;
  return player;
}
