let n = 0;
document.getElementById("btn").addEventListener("click", () => {
  n++;
  document.getElementById("out").textContent = "Clicked " + n + " time(s) — scripts are running";
});
