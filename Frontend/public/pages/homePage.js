import { renderVideoList } from '../components/videoList.js';

export function loadHomePage(container) {
  container.innerHTML = `
     <!-- Hero Section -->
  <section class="hero-section">
    <div class="hero-content">
      <h2>Share Your Amazing Momemnts</h2>
      <p>Upload Your Video.</p>
      <a href="#signup" class="cta-button">Register</a>
    </div>
  </section>

  <!-- Video Section -->
  <section class="video-dashboard">
    <h2 class="section-title">Videos Uploaded</h2>
    <div class="video-list">
      <div class="video-item">
        <video src="video1.mp4" controls></video>
        <div class="video-info">
          <h3>Sample Video 1</h3>
          <p>Description for Sample Video 1</p>
        </div>
      </div>
      <div class="video-item">
        <video src="video2.mp4" controls></video>
        <div class="video-info">
          <h3>Sample Video 2</h3>
          <p>Description for Sample Video 2</p>
        </div>
      </div>
      <div class="video-item">
        <video src="video3.mp4" controls></video>
        <div class="video-info">
          <h3>Sample Video 3</h3>
          <p>Description for Sample Video 3</p>
        </div>
      </div>
    </div>
  </section>
  `;

  // Render the video list in the "videos" section
  const videoContainer = container.querySelector('.videos');
  renderVideoList(videoContainer);
}
