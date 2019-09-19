if ("geolocation" in navigator) {
  console.log("Sijainti saatavilla");
  navigator.geolocation.getCurrentPosition(function(position){
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude)
    console.log(longitude)
  }
}
else{
  console.log("Sijainti ei saatavilla");
}
