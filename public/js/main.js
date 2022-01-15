const submitBtn = document.getElementById('submitBtn');

const getInfo = async() =>{
    submitBtn.innerHTML = '<div class="text-center"><div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div></div>';
    const cityName = document.getElementById('cityName').value;
    if(cityName == '')
    {
        document.getElementById('output').classList.add("data_hide");
        document.getElementById('city_name').innerText = 'Please enter city name';
    }
    else
    {
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=717c43df848a82bbf30a49a8fad68112`;
            const response = await fetch(url);
            const data = await response.json();
            document.getElementById('output').classList.remove("data_hide");
            document.getElementById('city_name').innerText = `${data.name}  ,  ${data.sys.country}`;
            document.getElementById('temp').innerText = data.main.temp;
            if(data.weather[0].main == 'Clouds')
            {
                document.getElementById('temp_status').innerHTML = '<i class="fa fa-cloud white"></i>';
            }
            else if(data.weather[0].main == 'Clear')
            {
                document.getElementById('temp_status').innerHTML = '<i class="fas fa-sun yellow"></i>';
            }
            else if(data.weather[0].main == 'Rain')
            {
                document.getElementById('temp_status').innerHTML = '<i class="fas fa-cloud-rain blue"></i>';
            }
            else
            {
                document.getElementById('temp_status').innerHTML = '<i class="fas fa-wind white"></i>';
            }

        }catch{
            document.getElementById('output').classList.add("data_hide");
            document.getElementById('city_name').innerText = 'No city found with this name';
        }
    }
    submitBtn.innerHTML = 'Search';
}

submitBtn.addEventListener('click',getInfo);

var d = new Date();
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
document.getElementById('day').innerText = days[d.getDay()];
document.getElementById("today_date").innerText = d.getDate() + ' '+ monthNames[d.getMonth()];