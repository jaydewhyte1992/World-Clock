//vostok
function updateTime() {
  let vostokElement = document.querySelector("#vostok");
  let vostokDateElement = vostokElement.querySelector(".date");
  let vostokTimeElement = vostokElement.querySelector(".time");
  let vostokTime = moment().tz("Antarctica/Vostok");
  vostokDateElement.innerHTML = vostokTime.format("MMMM Do YYYY");
  vostokTimeElement.innerHTML = vostokTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");
  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");

  //copenhagen
  let copenhagenElement = document.querySelector("#copenhagen");
  let copenhagenDateElement = copenhagenElement.querySelector(".date");
  let copenhagenTimeElement = copenhagenElement.querySelector(".time");
  let copenhagenTime = moment().tz("Europe/Copenhagen");
  copenhagenDateElement.innerHTML = copenhagenTime.format("MMMM Do YYYY");
  copenhagenTimeElement.innerHTML = copenhagenTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //lisbon
  let lisbonElement = document.querySelector("#lisbon");
  let lisbonDateElement = lisbonElement.querySelector(".date");
  let lisbonTimeElement = lisbonElement.querySelector(".time");
  let lisbonTime = moment().tz("Europe/Dublin");
  lisbonDateElement.innerHTML = lisbonTime.format("MMMM Do YYYY");
  lisbonTimeElement.innerHTML = lisbonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

let cityFlags = {
  "Australia/Sydney": "🇦🇺",
  "Europe/Prague": "🇨🇿",
  "Europe/Amsterdam": "🇳🇱",
  "America/Vancouver": "🇨🇦",
  "Africa/Cairo": "🇪🇬",
};
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", "").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector(".cities");
  let flagEmoji = cityFlags[cityTimeZone];
  citiesElement.innerHTML = ` 
  <div class="city">
    <div>
      <h2>${cityName} ${flagEmoji}</h2>
      <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>`;
}
updateTime();
setInterval(updateTime, 1000);

function updateDropdownCities() {
  let citiesSelectElement = document.querySelector("#city");
  let selectedCity = citiesSelectElement.value;
  updateCity({ target: { value: selectedCity } });
}
setInterval(updateDropdownCities, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
