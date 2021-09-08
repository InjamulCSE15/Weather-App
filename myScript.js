

let weather = {
        "apiKey": "5dbfd6784473477e9cb8fcc026ec2fcb",
        fetchWeather: function () {
            fetch("https://api.openweathermap.org/data/2.5/weather?q=Chittagong&units=metric&appid=5dbfd6784473477e9cb8fcc026ec2fcb")
            .then((response) => response.json())
            .then((data) => console.log(data));
        }
}