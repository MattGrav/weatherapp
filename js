function getWeather() {
 var name = $('#city').val();
 var url='http://api.openweathermap.org/data/2.5/weather?q=' + name + '&appid=52f80b94cd2384f78547ed4b102042a9';
 $.ajax(url, {
   success: function(data){
     var fahrenheit = convertKtoF(data.main.temp).toFixed(0);
     $('#temperature').html(fahrenheit + '°F');
   },
   error: function(error){
     console.log(error);
   },
 });
}

function convertKtoF(kelvin){
  // i can use kelvin anywhere under here 
  //for example, covertKtoF(100), kelvin would equal 100
  return 9 / 5 * (kelvin - 273) + 32;
}
