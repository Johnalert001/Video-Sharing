export function loadLoginPage(container) {
  container.innerHTML = `
    <form id="loginForm">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required>
      <button type="submit">Login</button>
    </form>
  `;

  const form = document.getElementById('loginForm');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = form.username.value;
    const password = form.password.value;

    try {
      const response = await fetch('http://localhost:3000/api/routes/userRoutes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        alert('Login successful!');
      } else {
        alert('Login failed.');
      }
    } catch (err) {
      console.error('Error during login:', err);
    }
  });
}
