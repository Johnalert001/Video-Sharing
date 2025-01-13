export function renderHeader() {
  const header = document.getElementById('header');
  if (header) {
    header.innerHTML = `
      <div class="container">
        <div class="logo">
          <h1>Video Distribution Platform</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#home" class="active">Home</a></li>
            <li><a href="#signup">Sign Up</a></li>
	    <li><a href="#login">Login</a></li>
            <li><a href="#dashboard">Dashboard</a></li>
          </ul>
        </nav>
      </div>
    `;
  }
}
