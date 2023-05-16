
const city = document.getElementById("city");
const weather = document.getElementById("temp")
const type = document.getElementById("type")
const fLike = document.getElementById("fLike")
const humidity = document.getElementById("humidity")
const locate = document.getElementById("locat")
const clouds = document.getElementById("clouds")



async function returnWeather(event) {
    event.preventDefault();
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=c9e169f7d643312e47b4270c56a514c1&units=imperial`)
    .then(Response => Response.json())
    .then(data=>{
        var temp = data.main.temp;
        var max = data.main.temp_max;
        var min = data.main.temp_min;
        var flike = data.main.feels_like;
        var humid = data.main.humidity;
        var locat = data.sys.id.name;
        var cloud = data.weather[0].description;
   
        document.getElementById('locat').innerHTML = 'The location is, ' + locat
        document.getElementById('clouds').innerHTML = 'The clouds are, ' + cloud
        document.getElementById('temp').innerHTML = 'The Temperature is, ' + temp + ' °F'
        document.getElementById('fLike').innerHTML = 'It Feels Like, ' + flike + ' °F'
        document.getElementById('humidity').innerHTML = 'The Humidity is, ' + humid + '%'
        document.getElementById('max').innerHTML = 'The Highest Temp Is, ' + max + ' °F'
        document.getElementById('min').innerHTML = 'The Lowest Temp is, ' + min + ' °F'


        console.log(data)
    })
   


   



   
}
    
