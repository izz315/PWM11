registerSW();

// Registers a service worker
async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      // Change the service worker URL to a non-existent file (e.g., "nonexistent-sw.js")
      // to test how the application handles errors when the service worker file is missing.
      const swUrl = "sw.js";
      await navigator.serviceWorker.register(swUrl);
      showResult("Service worker registered successfully!");       
    } catch (error) {
      showResult(`Error while registering: ${error.message}`);
      showResult("Error while registering: " + error.message);
    }
  } else {
      showResult("Service workers API not available");
  }
}

function showResult(text) {
  const outputElement = document.querySelector("output");
  if (outputElement) {
    outputElement.innerHTML = text;
  } else {
    console.error("Output element not found in the DOM.");
  }
}