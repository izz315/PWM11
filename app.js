registerSW();

// Registers a service worker
async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("./sw.js");
      console.log("Service worker registered", registration); // Tambahan
    } catch (error) {
      showResult("Error while registering: " + error.message);
    }
  } else {
    showResult("Service workers API not available");
  }
};

function showResult(text) {
  document.querySelector("output").innerHTML = text;
}
