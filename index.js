timezoneDisplay = document.getElementById("TimezoneDisplay");
mainTimeDisplay = document.getElementById("mainTimeDisplay");
hr24Switch = document.getElementById("Hr24TimeSwitch");
amDisplay = document.getElementById("AmDisplay");
pmDisplay = document.getElementById("PmDisplay");
timezoneSelector = document.getElementById("timezoneSelector");
chooser_utcM11 = document.getElementById("utc-11");
chooser_utcM10 = document.getElementById("utc-10");
chooser_utcM9 = document.getElementById("utc-9");
chooser_utcM8 = document.getElementById("utc-8");
chooser_utcM7 = document.getElementById("utc-7");
chooser_utcM6 = document.getElementById("utc-6");
chooser_utcM5 = document.getElementById("utc-5");
chooser_utcM4 = document.getElementById("utc-4");
chooser_utcM3 = document.getElementById("utc-3");
chooser_utcM2 = document.getElementById("utc-2");
chooser_utcM1 = document.getElementById("utc-1");
chooser_utc = document.getElementById("utc");
chooser_utcP1 = document.getElementById("utc+1");
chooser_utcP2 = document.getElementById("utc+2");
chooser_utcP3 = document.getElementById("utc+3");
chooser_utcP4 = document.getElementById("utc+4");
chooser_utcP5 = document.getElementById("utc+5");
chooser_utcP6 = document.getElementById("utc+6");
chooser_utcP7 = document.getElementById("utc+7");
chooser_utcP8 = document.getElementById("utc+8");
chooser_utcP9 = document.getElementById("utc+9");
chooser_utcP10 = document.getElementById("utc+10");
chooser_utcP11 = document.getElementById("utc+11");
chooser_utcP12 = document.getElementById("utc+12");
chooser_utcP13 = document.getElementById("utc+13");
chooser_utcP14 = document.getElementById("utc+14");

let strCurrentHour, strCurrentMinute, strCurrentSecond;
let hr24IsEnabled = true;
let currentTimeOffsetMin = 0, relativeDifferenceMin = 0;
hr24Switch.checked = true;

currentTime = new Date();
currentHour = currentTime.getHours();
if (!hr24IsEnabled) {
    if (currentHour >= 13) {
        currentHour -= 12;
        amDisplay.style.opacity = 0.3;
        pmDisplay.style.opacity = 1;
    }
    else if (currentHour === 12) {
        amDisplay.style.opacity = 0.3;
        pmDisplay.style.opacity = 1;
    }
    else {
        amDisplay.style.opacity = 1;
        pmDisplay.style.opacity = 0.3;
    }
}
else {
    amDisplay.style.opacity = 0;
    pmDisplay.style.opacity = 0;
}
currentMinute = currentTime.getMinutes();
currentSecond = currentTime.getSeconds();

strCurrentHour = String(currentHour);
if (currentMinute < 10) strCurrentMinute = String(`0${currentMinute}`); else strCurrentMinute = String(currentMinute);
if (currentSecond < 10) strCurrentSecond = String(`0${currentSecond}`); else strCurrentSecond = String(currentSecond);

mainTimeDisplay.textContent = `${strCurrentHour}:${strCurrentMinute}:${strCurrentSecond}`;

function hasDST(date = new Date()) {
    const january = new Date(
        date.getFullYear(),
        0,
        1,
    ).getTimezoneOffset();
    const july = new Date(
        date.getFullYear(),
        6,
        1,
    ).getTimezoneOffset();

    return Math.max(january, july) !== date.getTimezoneOffset();
}

window.onload = mainTicker();

function mainTicker() {
    function change_MTD() {
        currentTime = new Date();
        currentHour = currentTime.getHours();
        if (!hr24IsEnabled) {
            if (currentHour >= 13) {
                currentHour -= 12;
                amDisplay.style.opacity = 0.3;
                pmDisplay.style.opacity = 1;
            }
            else if (currentHour === 12) {
                amDisplay.style.opacity = 0.3;
                pmDisplay.style.opacity = 1;
            }
            else {
                amDisplay.style.opacity = 1;
                pmDisplay.style.opacity = 0.3;
            }
        }
        else {
            amDisplay.style.opacity = 0;
            pmDisplay.style.opacity = 0;
        }
        currentMinute = currentTime.getMinutes();
        currentSecond = currentTime.getSeconds();
        strCurrentHour = String(currentHour);
        if (currentMinute < 10) strCurrentMinute = String(`0${currentMinute}`); else strCurrentMinute = String(currentMinute);
        if (currentSecond < 10) strCurrentSecond = String(`0${currentSecond}`); else strCurrentSecond = String(currentSecond);
        mainTimeDisplay.textContent = `${strCurrentHour}:${strCurrentMinute}:${strCurrentSecond}`;
    }
    setInterval(change_MTD, 1000);
}
let timezoneOffsetMin, timezoneOffsetHr;

function getTimeOffset() {
    timezoneOffsetMin = currentTime.getTimezoneOffset();
    if (hasDST(currentTime)) timezoneOffsetMin += 60;
    timezoneOffsetHr = timezoneOffsetMin / 60;
}

currentTimeOffsetMin = timezoneOffsetMin;
getTimeOffset();
deriveTimezoneSwitch();

function deriveTimezoneSwitch() {
    switch (true) {
        case timezoneOffsetHr == 11:
            timezoneDisplay.textContent = "UTC-11 // Midway/Niue/Pago Pago";
            break;
        case timezoneOffsetHr == 10:
            timezoneDisplay.textContent = "UTC-10 // Adak/Honolulu/Rarotonga";
            break;
        case timezoneOffsetHr == 9:
            timezoneDisplay.textContent = "UTC-9 // Nome/Juneau/Gambier";
            break;
        case timezoneOffsetHr == 8:
            timezoneDisplay.textContent = "UTC-8 // Los Angeles/Vancouver/Pitcairn";
            break;
        case timezoneOffsetHr == 7:
            timezoneDisplay.textContent = "UTC-7 // Ciudad Juarez/Denver/Edmonton/Phoenix";
            break;
        case timezoneOffsetHr == 6:
            timezoneDisplay.textContent = "UTC-6 // Belize/Chicago/Costa Rica/El Salvador/Mexico City/Winnipeg";
            break;
        case timezoneOffsetHr == 5:
            timezoneDisplay.textContent = "UTC-5 // Midland/Bogota/Cancun/Cayman/Detroit/Havana";
            break;
        case timezoneOffsetHr == 4:
            timezoneDisplay.textContent = "UTC-4 // Antigua/Barbados/Caracas/Dominica/Puerto Rico/St. Kitts";
            break;
        case timezoneOffsetHr == 3:
            timezoneDisplay.textContent = "UTC-3 // Buenos Aires/Cordoba/Montevideo/Sao Paulo/Palmer";
            break;
        case timezoneOffsetHr == 2:
            timezoneDisplay.textContent = "UTC-2 // Noronha/Nuuk/South Georgia";
            break;
        case timezoneOffsetHr == 1:
            timezoneDisplay.textContent = "UTC-1 // Scoresbysund/Azores/Cape Verde";
            break;
        case timezoneOffsetHr == 0:
            timezoneDisplay.textContent = "UTC // Oagadougou/Faroe/Reykjavik/Dublin/Lisbon/London";
            break;
        case timezoneOffsetHr == -1:
            timezoneDisplay.textContent = "UTC+1 // Algiers/Lagos/Amsterdam/Berlin/Copenhagen/Paris";
            break;
        case timezoneOffsetHr == -2:
            timezoneDisplay.textContent = "UTC+2 // Athens/Cairo/Gaza/Bucharest/Helsinki/Kyiv";
            break;
        case timezoneOffsetHr == -3:
            timezoneDisplay.textContent = "UTC+3 // Djibouti/Bahrain/Qatar/Istanbul/Simferopol/Antananarivo";
            break;
        case timezoneOffsetHr == -4:
            timezoneDisplay.textContent = "UTC+4 // Tbilisi/Baku/Dubai/Yerevan/Reunion";
            break;
        case timezoneOffsetHr == -5:
            timezoneDisplay.textContent = "UTC+5 // Mawson/Ashgabat/Tashkent/Maldives";
            break;
        case timezoneOffsetHr == -6:
            timezoneDisplay.textContent = "UTC+6 // Almaty/Urumqi/Chagos";
            break;
        case timezoneOffsetHr == -7:
            timezoneDisplay.textContent = "UTC+7 // Bangkok/Ho Chi Minh/Jakarta/Phnom Penh/Christmas";
            break;
        case timezoneOffsetHr == -8:
            timezoneDisplay.textContent = "UTC-8 // Brunei/Hong Kong/Kuala Lumpur/Macau/Shanghai/Taipei";
            break;
        case timezoneOffsetHr == -9:
            timezoneDisplay.textContent = "UTC+9 // Dili/Pyongyang/Seoul/Tokyo/Palau";
            break;
        case timezoneOffsetHr == -10:
            timezoneDisplay.textContent = "UTC+10 // Brisbane/Melbourne/Sydney/Guam/Saipan";
            break;
        case timezoneOffsetHr == -11:
            timezoneDisplay.textContent = "UTC+11 // Casey/Bougainville/Norfolk";
            break;
        case timezoneOffsetHr == -12:
            timezoneDisplay.textContent = "UTC+12 // McMurdo/Auckland/Fiji/Nauru/Wake";
            break;
        case timezoneOffsetHr == -13:
            timezoneDisplay.textContent = "UTC+13 // Fakaofo/Kanton";
            break;
        case timezoneOffsetHr == -14:
            timezoneDisplay.textContent = "UTC+14 // Kiribati";
            break;
    }
    currentTimeOffsetMin = timezoneOffsetMin;
}

hr24Switch.onclick = function () {
    if (hr24Switch.checked) hr24IsEnabled = true; else hr24IsEnabled = false;
    mainTicker();
}

console.log(currentTimeOffsetMin);

function timezoneChange() {
    console.log("change detected");
    var selection = timezoneSelector.options[timezoneSelector.selectedIndex].id;

    switch (true) {
        case selection === "utc-11":
            console.log("utc-11 selected");
            relativeDifferenceMin = timezoneOffsetMin - 660;
            console.log(relativeDifferenceMin);



    }


}