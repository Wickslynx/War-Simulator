
// Initialize the map
var map = L.map('map').setView([20, 0], 2);

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Function to handle border changes
function changeBorders(country, newBorders) {
    // Logic to change the borders of the specified country
    // This is a placeholder function and needs to be implemented
}

// Example of adding a polygon (country borders)
var polygon = L.polygon([
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12]
]).addTo(map);

// Example of changing borders
changeBorders('ExampleCountry', [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12]
]);
