import { loadHomePage } from './pages/homePage.js';
import { loadSignUpPage } from './pages/signUpPage.js';
import { loadLoginPage } from './pages/loginPage.js';
import { loadCreatorDashboard } from './pages/creatorDashboard.js';

export function handleRouteChange(route, container) {
  // Clear the container
  container.innerHTML = '';

  // Route to the appropriate page
  switch (route) {
    case '#home':
      loadHomePage(container);
      break;
    case '#signup':
      loadSignUpPage(container);
      break;
    case '#login':
      loadLoginPage(container);
      break;
    case '#dashboard':
      loadCreatorDashboard(container);
      break;
    default:
      loadHomePage(container); // Default to home page
  }
}
