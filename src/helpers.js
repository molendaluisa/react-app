export function convertTempToFarenheit(tempCelsius) {
    return Math.round((tempCelsius * 9 / 5 ) + 32);
}

export function convertWindToMPH(wind) {
    return Math.round(wind * 0.6213711922);
}

export function adjustTime(time, timezone) {
    return new Date((time + timezone) * 1000);
}