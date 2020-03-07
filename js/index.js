function getWeather() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            let jsonData = JSON.parse(xhr.responseText);

            let temp = jsonData.timeSeries[1].parameters[11].values[0];
            document.getElementById("weather").innerHTML = temp + "&#176;C";
        } else {
            console.log(xhr.responseText);
        }
    };
    let url = "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/18.1489/lat/57.3081/data.json";
    // Create and send a GET request
    // The first argument is the post type (GET, POST, PUT, DELETE, etc.)
    // The second argument is the endpoint URL
    xhr.open('GET', url);
    xhr.send();
}
getWeather();