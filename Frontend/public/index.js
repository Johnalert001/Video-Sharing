import { renderHeader } from './components/header.js';
import { handleRouteChange } from './app.js';

document.addEventListener('DOMContentLoaded', () => {
  // Render the header
  renderHeader();

  // Get the main container
  const appContainer = document.getElementById('app');

  // Handle initial route
  handleRouteChange(window.location.hash, appContainer);

  // Listen for hash changes (e.g., #home, #signup, #dashboard)
  window.addEventListener('hashchange', () => {
    handleRouteChange(window.location.hash, appContainer);
  });
});
