function displayFlightForm() {
    document.getElementById('flight').style.display = 'block';
    document.getElementById('car').style.display = 'none';
    document.getElementById('hotel').style.display = 'none';
}

function displayCarForm() {
    document.getElementById('flight').style.display = 'none';
    document.getElementById('car').style.display = 'block';
    document.getElementById('hotel').style.display = 'none';
}

function displayHotelForm() {
    document.getElementById('flight').style.display = 'none';
    document.getElementById('car').style.display = 'none';
    document.getElementById('hotel').style.display = 'block';
}

