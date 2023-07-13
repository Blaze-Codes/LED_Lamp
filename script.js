$("#baseDiv").click(function (e) {
    $("#popUpDiv").show();
});
$("#popupSelect").change(function (e) {
    $("#baseDiv").html($("#popupSelect").val() + ' clicked. Click again to change.');
    $("#popUpDiv").hide();
});

/* 
function getValue() {
    alert("Test")
    var s = document.getElementById("slider1")
    alert(s.value)
} */

function slider1() {
    document.getElementById("value1").textContent = document.getElementById("slider1").value
}

function slider2() {
    document.getElementById("value2").textContent = document.getElementById("slider2").value
}

function slider3() {
    document.getElementById("value3").textContent = document.getElementById("slider3").value
}

function slider4() {
    document.getElementById("value4").textContent = document.getElementById("slider4").value
}

function slider5() {
    document.getElementById("value5").textContent = document.getElementById("slider5").value
}

function slider6() {
    document.getElementById("value6").textContent = document.getElementById("slider6").value
}



function submit() {

    if (document.getElementById("popupSelect").value == "Null"){
        fetch("http://192.168.4.1/api?cmd=2%2063%2000", {method: "POST"})
    }
    if (document.getElementById("popupSelect").value == "Eins") {
        fetch("http://192.168.4.1/api?cmd=2%2063%2000", {method: "POST"})
        fetch("http://192.168.4.1/api?cmd=2%2063%20100", {method: "POST"})
    }
    if (document.getElementById("popupSelect").value == "Zwei"){
        fetch("http://192.168.4.1/api?cmd=2%2063%2000", {method: "POST"})
        fetch("http://192.168.4.1/api?cmd=2%2042%20100", {method: "POST"})
    }
    if (document.getElementById("popupSelect").value == "Drei"){
        fetch("http://192.168.4.1/api?cmd=2%2063%2000", {method: "POST"})
        fetch("http://192.168.4.1/api?cmd=2%2021%20100", {method: "POST"})
    }
    if (document.getElementById("popupSelect").value == "Vier"){
        fetch("http://192.168.4.1/api?cmd=2%2063%2000", {method: "POST"})
        fetch("http://192.168.4.1/api?cmd=3%201%2063%20100%200%20100%20500", {method: "POST"})
    }
    if (document.getElementById("popupSelect").value == "Fünf"){
        fetch("http://192.168.4.1/api?cmd=2%2063%2000", {method: "POST"})
        fetch("http://192.168.4.1/api?cmd=3%201%2021%20100%2042%20100%20500",{method: "POST"})
    }
    if (document.getElementById("popupSelect").value == "Sechs"){
        fetch("http://192.168.4.1/api?cmd=2%2063%2000", {method: "POST"})
        fetch("http://192.168.4.1/api?cmd=3%201%207%20100%2056%20100%20500",{method: "POST"})
    }
    if (document.getElementById("popupSelect").value == "Sieben"){
        fetch("http://192.168.4.1/api?cmd=2%2063%2000", {method: "POST"})
        fetch("http://192.168.4.1/api?cmd=3%203%20500",{method: "POST"})
    }
    if (document.getElementById("popupSelect").value == "Acht"){
        fetch("http://192.168.4.1/api?cmd=5%201",{method: "POST"})
    }
}

function dimmung() {
    var led1 = document.getElementById("slider1").value
    var led2 = document.getElementById("slider2").value
    var led3 = document.getElementById("slider3").value
    var led4 = document.getElementById("slider4").value
    var led5 = document.getElementById("slider5").value
    var led6 = document.getElementById("slider6").value

    fetch("http://192.168.4.1/api?cmd=1%201%20" + led1, {method: "POST"})
    fetch("http://192.168.4.1/api?cmd=1%202%20" + led2, {method: "POST"})
    fetch("http://192.168.4.1/api?cmd=1%203%20" + led3, {method: "POST"})
    fetch("http://192.168.4.1/api?cmd=1%204%20" + led4, {method: "POST"})
    fetch("http://192.168.4.1/api?cmd=1%205%20" + led5, {method: "POST"})
    fetch("http://192.168.4.1/api?cmd=1%206%20" + led6, {method: "POST"})
}

function reset(){
    fetch("http://192.168.4.1/api?cmd=2%2063%2050", {method: "POST"})

    document.getElementById("value1").textContent = 50
    document.getElementById("slider1").value = 50

    document.getElementById("value2").textContent = 50
    document.getElementById("slider2").value = 50

    document.getElementById("value3").textContent = 50
    document.getElementById("slider3").value = 50

    document.getElementById("value4").textContent = 50
    document.getElementById("slider4").value = 50

    document.getElementById("value5").textContent = 50
    document.getElementById("slider5").value = 50

    document.getElementById("value6").textContent = 50
    document.getElementById("slider6").value = 50
}