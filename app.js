window.addEventListener('load', ()=>{
    let long;
    let lat;
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            long = position.coords.longitude;
            lat= position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/04d5f7e6beca0852f025f8fd4303b7d6/${lat},${long}`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then (data => { 
                    console.log(data);
                })
            }
        )
    } 
});