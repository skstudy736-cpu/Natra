//==============================
// clock
// =============================
function updateClock() {
    const clock = document.getElementById("clock");
    
    if (clock) {
        clock.textContent = new Date().toLocaleTimeString();
}
  }

  updateClock(); // Initial call to set the clock immediately
  setInterval(updateClock, 1000); // Update the clock every second