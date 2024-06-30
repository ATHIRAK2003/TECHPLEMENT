window.onload = function () {

    const citiesWeather = [
        {"cityName": "Tokyo", "Temperature": "25"},
        {"cityName": "New York City", "Temperature": "22"},
        {"cityName": "London", "Temperature": "18"},
        {"cityName": "Paris", "Temperature": "20"},
        {"cityName": "Moscow", "Temperature": "15"},
        {"cityName": "Beijing", "Temperature": "30"},
        {"cityName": "Sydney", "Temperature": "22"},
        {"cityName": "Los Angeles", "Temperature": "27"},
        {"cityName": "Rio de Janeiro", "Temperature": "26"},
        {"cityName": "Cairo", "Temperature": "32"},
        {"cityName": "Mumbai", "Temperature": "31"},
        {"cityName": "Mexico City", "Temperature": "24"},
        {"cityName": "Berlin", "Temperature": "19"},
        {"cityName": "Bangkok", "Temperature": "29"},
        {"cityName": "Rome", "Temperature": "23"},
        {"cityName": "Toronto", "Temperature": "21"},
        {"cityName": "Istanbul", "Temperature": "28"},
        {"cityName": "Seoul", "Temperature": "26"},
        {"cityName": "Lagos", "Temperature": "30"},
        {"cityName": "Jakarta", "Temperature": "31"},
        {"cityName": "Lima", "Temperature": "20"},
        {"cityName": "Madrid", "Temperature": "25"},
        {"cityName": "Dubai", "Temperature": "37"},
        {"cityName": "Singapore", "Temperature": "28"},
        {"cityName": "São Paulo", "Temperature": "23"},
        {"cityName": "Shanghai", "Temperature": "29"},
        {"cityName": "Hong Kong", "Temperature": "30"},
        {"cityName": "Delhi", "Temperature": "35"},
        {"cityName": "Buenos Aires", "Temperature": "18"},
        {"cityName": "Karachi", "Temperature": "33"},
        {"cityName": "Baghdad", "Temperature": "38"},
        {"cityName": "Athens", "Temperature": "26"},
        {"cityName": "Kolkata", "Temperature": "30"},
        {"cityName": "Cape Town", "Temperature": "17"},
        {"cityName": "Nairobi", "Temperature": "24"},
        {"cityName": "Santiago", "Temperature": "19"},
        {"cityName": "Amsterdam", "Temperature": "21"},
        {"cityName": "Vienna", "Temperature": "22"},
        {"cityName": "Osaka", "Temperature": "27"},
        {"cityName": "Montreal", "Temperature": "20"},
        {"cityName": "Chicago", "Temperature": "26"},
        {"cityName": "Manila", "Temperature": "29"},
        {"cityName": "Melbourne", "Temperature": "15"},
        {"cityName": "Hanoi", "Temperature": "33"},
        {"cityName": "Brussels", "Temperature": "19"},
        {"cityName": "Kuala Lumpur", "Temperature": "31"},
        {"cityName": "Riyadh", "Temperature": "40"},
        {"cityName": "Dublin", "Temperature": "18"},
        {"cityName": "Prague", "Temperature": "23"},
        {"cityName": "Budapest", "Temperature": "24"},
        {"cityName": "Warsaw", "Temperature": "17"},
        {"cityName": "Copenhagen", "Temperature": "20"},
        {"cityName": "Stockholm", "Temperature": "18"},
        {"cityName": "Lisbon", "Temperature": "22"},
        {"cityName": "Helsinki", "Temperature": "16"},
        {"cityName": "Bangalore", "Temperature": "26"},
        {"cityName": "Auckland", "Temperature": "14"},
        {"cityName": "Kyiv", "Temperature": "25"},
        {"cityName": "Oslo", "Temperature": "19"},
        {"cityName": "Dhaka", "Temperature": "34"},
        {"cityName": "Zurich", "Temperature": "21"},
        {"cityName": "San Francisco", "Temperature": "21"},
        {"cityName": "Seattle", "Temperature": "23"},
        {"cityName": "Denver", "Temperature": "28"},
        {"cityName": "Dubrovnik", "Temperature": "25"},
        {"cityName": "Kyoto", "Temperature": "24"},
        {"cityName": "Reykjavik", "Temperature": "15"},
        {"cityName": "Edinburgh", "Temperature": "17"},
        {"cityName": "Brisbane", "Temperature": "20"},
        {"cityName": "Honolulu", "Temperature": "29"}
    ];

    /** -> Handling Form Submission **/
    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", function () {

        // get input city
        const city = document.getElementById("city").value;

        // clear response area
        document.getElementById("response").innerHTML = '';


        // check if user inputted city is found
        let cityData = null;

        citiesWeather.forEach(element => {
            if (element.cityName.toLowerCase().includes(city.toLowerCase())) {
                cityData = element;
            }
        })

        if (cityData === null) {
            document.getElementById("response").innerHTML = `Weather unavailable for ${city}`;
        } else {
            document.getElementById("response").innerHTML = `${cityData.Temperature} degree!`;
        }


    });
    /** <- Handling Form Submission **/
}