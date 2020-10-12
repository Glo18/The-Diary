$(document).ready(function() {
    $(".onCrack1").click(function() {
        $("#click1").toggle();
    });
    $(".onCrack2").click(function() {
        $("#click2").toggle();
    });
    $(".onCrack3").click(function() {
        $("#click3").toggle();
    });
});
var btn = document.getElementById("mySubw");

btn.onclick = function(event) {
    var x = document.forms["myForm"]["contact-name"].value;
    if (x == "") {
        alert("Name not entered");
        return false;
    }
    var y = document.forms["myForm"]["contact-email"].value;
    if (y == "") {
        alert("Email not entered");
        return false;
    }
    var z = document.forms["myForm"]["contact-message"].value;
    if (z == "") {
        alert("You have no message to send");
        return false;
    }
    var person1Input = $("input#contact-name").val();
    $("#outputName").append(person1Input);
}

