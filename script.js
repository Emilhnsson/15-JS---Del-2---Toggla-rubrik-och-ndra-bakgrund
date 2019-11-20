function changeText() {
    var nyText = document.getElementById('text').value;
    var gammalText = document.getElementById('title');

    gammalText.innerHTML = nyText;
}

function darkMode() {
    var body = document.body;
    var bgSwitch = document.getElementById("switch");

    if(body.style.backgroundColor != "black") {
        body.style.backgroundColor = "black";
        body.style.color = "white";

        bgSwitch.style.backgroundColor = "white";
        bgSwitch.style.color = "black";
        bgSwitch.innerHTML = "Light Mode";
        
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";

        bgSwitch.style.backgroundColor = "black";
        bgSwitch.style.color = "white";
        bgSwitch.innerHTML = "Dark Mode";
    }
    
}