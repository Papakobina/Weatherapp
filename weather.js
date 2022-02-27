window.addEventListener('load', ()=>{
    var long;
    var lat;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position =>{
            console.log(position);
            long= position.coords.longitude;
            lat= position.coords.latitude;
        });
        
    }

});
