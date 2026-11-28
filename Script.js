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

  // ========================================
  // ROVER DATA
  // ========================================

  const rovers = [
      {id : "R-01", zone : "Library", status : "onliine", battery : 92, temerature : 34},
      {id : "R-02", zone : "R&D-Block", status : "onliine", battery : 69, temerature : 28},
      {id : "R-03", zone : "KGH", status : "onliine", battery : 65, temerature : 43},
      {id : "R-04", zone : "F-Block", status : "onliine", battery : 77, temerature : 20},
      {id : "R-05", zone : "Indoor Complex", status : "onliine", battery : 88, temerature : 23},
      {id : "R-06", zone : "C-Block", status : "onliine", battery : 99, temerature : 21}
      
  ];

  // ===========================================
  // Change Online Count
  // ===========================================

const onlineCount = document.getElementById("online-count");
onlineCount.textContent = rovers.length + "/" + rovers.length;
