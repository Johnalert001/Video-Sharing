export async function renderCommentSection(container, videoId) {
  try {
    const response = await fetch(`/api/comments/${videoId}`);
    const comments = await response.json();

    const commentSection = document.createElement('div');
    commentSection.className = 'comment-section';

    comments.forEach(comment => {
      const commentItem = document.createElement('div');
      commentItem.textContent = comment.content;
      commentSection.appendChild(commentItem);
    });

    container.appendChild(commentSection);
  } catch (err) {
    console.error('Error fetching comments:', err);
  }
}
