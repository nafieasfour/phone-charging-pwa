function updateBatteryDisplay(level) {
  const batteryDiv = document.getElementById('battery-level');
  batteryDiv.textContent = Math.round(level * 100) + '%';
}

// Check if Battery API is available
if ('getBattery' in navigator) {
  navigator.getBattery().then(function(battery) {
    updateBatteryDisplay(battery.level);
    // Update when the battery level changes
    battery.addEventListener('levelchange', function() {
      updateBatteryDisplay(battery.level);
    });
  });
} else {
  document.getElementById('battery-level').textContent = "Battery API not supported";
}
