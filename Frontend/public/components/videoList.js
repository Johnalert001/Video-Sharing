export async function renderVideoList(container) {
  try {
    const response = await fetch('/api/videos');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const videos = await response.json();

    const videoList = document.createElement('div');
    videoList.className = 'video-list';

    videos.forEach((video) => {
      const videoItem = document.createElement('div');
      videoItem.innerHTML = `
        <h3>${video.title}</h3>
        <p>${video.hashtags}</p>
        <video controls>
          <source src="${video.url}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      `;
      videoList.appendChild(videoItem);
    });

    container.appendChild(videoList);
  } catch (err) {
    console.error('Error fetching videos:', err);
    container.innerHTML = '<p>Failed to load videos.</p>';
  }
}
