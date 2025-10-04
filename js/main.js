import { initHeroSection } from './modules/hero.js';
import { initFeatures } from './modules/features.js';
import { initNavbar } from './modules/navbar.js';

document.addEventListener('DOMContentLoaded', () => {
  initHeroSection();
  initFeatures();
  initNavbar();
});
