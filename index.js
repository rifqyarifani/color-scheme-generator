const colorPicker = document.getElementById("color-picker");
const dropdown = document.getElementById("dropdown");
const getBtn = document.getElementById("get-btn");
const main = document.getElementById("main");
let colorValue = "000000";
let mode = "monochrome";

colorPicker.addEventListener("change", function () {
  colorValue = colorPicker.value;
  colorValue = colorValue.slice(1, colorValue.length);
});

dropdown.addEventListener("change", function () {
  mode = dropdown.value;
});

getBtn.addEventListener("click", function () {
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorValue}&mode=${mode}&count=6`
  )
    .then((response) => response.json())
    .then((data) => {
      let html = ``;
      for (const color of data.colors) {
        html += `
        <div class="sub-main">
            <div class="color" style="background-color:${color.hex.value};"></div>
            <p>${color.hex.value}</p>
        </div>
        `;
      }
      main.innerHTML = html;
    });
});
