const dataUrl = "https://arkadiusz10.github.io/ESP32/data/data.json";

async function loadData() {
  try {
    const res = await fetch(dataUrl + "?t=" + Date.now()); // cache bypass
    const data = await res.json();

    document.getElementById("temp").innerText =
      Number(data.temperature).toFixed(1) + " °C";

    document.getElementById("hum").innerText =
      Number(data.humidity).toFixed(0) + " %";

    document.getElementById("status").innerText =
      "RSSI: " + data.rssi + " dBm";

  } catch (e) {
    document.getElementById("status").innerText =
      "Błąd pobierania danych";
  }
}

setInterval(loadData, 2000);
loadData();
