const dbUrl = "https://esp32-serv-e444c-default-rtdb.europe-west1.firebasedatabase.app/";

async function loadData() {
  const res = await fetch(dbUrl + "/esp32.json");
  const data = await res.json();

  document.getElementById("temp").innerText =
    data.temperature.toFixed(1) + " °C";

  document.getElementById("hum").innerText =
    data.humidity.toFixed(0) + " %";

  document.getElementById("status").innerText =
    "RSSI: " + data.rssi + " dBm";
}

setInterval(loadData, 2000);
loadData();
