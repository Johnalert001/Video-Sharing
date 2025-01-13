export function loadCreatorDashboard(container) {
  container.innerHTML = `
    <section class="dashboard">
      <h2>Your Dashboard</h2>
      <form id="uploadForm">
        <label for="title">Video Title:</label>
        <input type="text" id="title" name="title" required>
        <label for="video">Video File:</label>
        <input type="file" id="video" name="video" accept="video/*" required>
        <button type="submit" class="btn-primary">Upload Video</button>
      </form>
    </section>
  `;

  const form = document.getElementById('uploadForm');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/videos/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Video uploaded successfully!');
      } else {
        alert('Error uploading video.');
      }
    } catch (err) {
      console.error('Error:', err);
    }
  });
}
