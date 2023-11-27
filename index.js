/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const ElnumberBox = document.getElementById("numberBox")
const converButton = document.getElementById("convertBtn")
let ElLengthBox = document.getElementById("lengthBox")
let ElvolumeBox = document.getElementById("volumeBox")
let ElmassBox = document.getElementById("massBox")
let ElerrorText = document.getElementById("errorText")

converButton.addEventListener("click", function() {
    if (ElnumberBox.value < 0){
        ElerrorText.innerText = "Only positive numbers"
    } else {
    lengthCal()
    volumeCal()
    massCal()
    }
})

function lengthCal() {
    let metersToFeet = ElnumberBox.value * 3.281
    let feetToMeters = ElnumberBox.value / 3.281
    
    let lengthSolution = `${ElnumberBox.value} meters = ${metersToFeet.toFixed(3)} feet | 
    ${ElnumberBox.value} feet = ${feetToMeters.toFixed(3)} meters`
    ElLengthBox.innerHTML = lengthSolution;
}

function volumeCal() {
    let litersToGallons = ElnumberBox.value * 0.264
    let gallonsToLiters = ElnumberBox.value / 0.264
    
    let volumeSolution = `${ElnumberBox.value} liters = ${litersToGallons.toFixed(3)} gallons | 
    ${ElnumberBox.value} gallons = ${gallonsToLiters.toFixed(3)} liters`
    ElvolumeBox.innerHTML = volumeSolution;
}

function massCal() {
    let kiloToPounds = ElnumberBox.value * 2.204
    let poundsToKilo = ElnumberBox.value / 2.204
    
    let massSolution = `${ElnumberBox.value} kilos = ${kiloToPounds.toFixed(3)} pounds | 
    ${ElnumberBox.value} pounds = ${poundsToKilo.toFixed(3)} kilos`
    ElmassBox.innerHTML = massSolution
    
}

