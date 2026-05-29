/**
 * Vercel Speed Insights Initialization Script
 * This script initializes Vercel Speed Insights for performance monitoring
 * using the @vercel/speed-insights package.
 */
(function() {
  'use strict';

  // Only run in production (Vercel environment)
  var isProduction = window.location.hostname !== 'localhost' && 
                     window.location.hostname !== '127.0.0.1';
  
  if (!isProduction) {
    console.log('[Speed Insights] Skipped: Not running in production environment');
    return;
  }

  // Initialize the Speed Insights queue
  window.si = window.si || function() { 
    (window.siq = window.siq || []).push(arguments); 
  };

  // Load the Speed Insights script dynamically
  var script = document.createElement('script');
  script.defer = true;
  script.src = '/_vercel/speed-insights/script.js';
  script.onerror = function() {
    console.warn('[Speed Insights] Failed to load script. Make sure Speed Insights is enabled in Vercel dashboard.');
  };
  
  document.head.appendChild(script);
})();
