let Answer = document.getElementById("Output")
let Display = document.getElementById("Seconds")
let DisplayRed = document.getElementById("OutputRed")
let DisplayBlue = document.getElementById("OutputBlue")
let DisplayGreen = document.getElementById("OutputGreen")

function ConverterToRGB() {
    let UserInput = document.getElementById("UserInput").value

    let Red = parseInt(UserInput.slice(1,3), 16)
    let Blue = parseInt(UserInput.slice(3,5), 16)
    let Green = parseInt(UserInput.slice(5,7), 16)

    DisplayRed.innerHTML = "R:"+ Red
    DisplayGreen.innerHTML = "G:"+Green
    DisplayBlue.innerHTML = "B:"+Blue

    console.log(Red, Blue, Green)



Display.style.display = "block"
// Answer.innerHTML = UserInput * \;



}