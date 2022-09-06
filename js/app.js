// do not show Api Key on your Js File
const API_KEY = `659a6bb88e3fbdb0d2db193a73d10153`;
const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}


const displayTemperature = data => {
    // const temperature = document.getElementById('temperature');
    // temperature.innerText = data.main.temp;
    setInnerTextById('temperature', data.main.temp);
    setInnerTextById('condition', data.weather[0].main);
    console.log(data.weather[0].main);
}
const setInnerTextById = (id, text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;

}



document.getElementById('btn-search').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    //set city
    document.getElementById('city').innerText = city;
    loadTemperature(city);
})


loadTemperature('dhaka');