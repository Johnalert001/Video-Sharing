export function loadSignUpPage(container) {
  container.innerHTML = `
   <section class="signup">
  <h2>Create Your Account</h2>
  <form id="signupForm">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>

    <label for="role">Role:</label>
    <select id="role" name="role" required>
      <option value="" disabled selected>Select your role</option>
      <option value="consumer">Consumer</option>
      <option value="creator">Creator</option>
    </select>

    <button type="submit" class="btn-primary">Sign Up</button>
  </form>
</section>

  `;

  // Handle form submission
  const form = document.getElementById('signupForm');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    try {
      const response = await fetch('http://localhost:3000/api/routes/userRoutes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.get('username'),
          email: formData.get('email'),
          password: formData.get('password'),
        }),
      });

      if (response.ok) {
        alert('Account created successfully!');
        window.location.hash = '#home';
      } else {
        alert('Error creating account.');
      }
    } catch (err) {
      console.error('Error:', err);
    }
  });
}
