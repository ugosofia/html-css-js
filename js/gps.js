function show(posizione) {
    console.log("Latitudine: " + posizione.coords.latitude);
    console.log("Longitudine: " + posizione.coords.longitude);
    console.log("Speed: " + posizione.coords.speed);


}


if(navigator.geolocation) {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(show, null {
            enableHighAccuracy: true,
            maximumAge: 60000,
            timeout: 1000
        )};
    }
}