const API_KEY = 'ZIZCT7I5C4QH7SFR'; 
function addRow() {
  const inputsDiv = document.getElementById("inputs");
  const newRow = document.createElement("div");
  newRow.className = "row";
  newRow.innerHTML = `
    <input type="number" step="1" placeholder="Day" class="day" required />
    <input type="number" step="0.01" placeholder="Price" class="price" required />
  `;
  inputsDiv.appendChild(newRow);
}

document.getElementById("priceForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const days = Array.from(document.querySelectorAll(".day")).map(el => parseFloat(el.value));
  const prices = Array.from(document.querySelectorAll(".price")).map(el => parseFloat(el.value));

  if (days.length < 2) {
    alert("Please enter at least two data points.");
    return;
  }

  const { slope, intercept } = linearRegression(days, prices);
  const nextDay = Math.max(...days) + 1;
  const predictedPrice = (slope * nextDay + intercept).toFixed(2);

  document.getElementById("result").innerText = `📊 Predicted price for day ${nextDay}: ₹${predictedPrice}`;
});

function linearRegression(x, y) {
  const n = x.length;
  const sumX = x.reduce((a, b) => a + b, 0);
  const sumY = y.reduce((a, b) => a + b, 0);
  const sumXY = x.reduce((sum, xi, i) => sum + xi * y[i], 0);
  const sumX2 = x.reduce((sum, xi) => sum + xi * xi, 0);

  const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;

  return { slope, intercept };
}
function exitApp() {
  if (confirm("Are you sure you want to exit?")) {
    // Try to close the tab (will only work if opened via JavaScript like window.open)
    window.open('', '_self').close();

    // Or redirect to a thank you / goodbye page
    window.location.href = "https://www.google.com"; 
    <button onclick="exitApp()" class="exit-btn">Exit App</button>
  }
}

