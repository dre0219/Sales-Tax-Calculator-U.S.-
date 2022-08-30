//Calculations for the script.js file below.
var $ = function (id) {
    return document.getElementById(id); 
};

//In order to calculate the funnction at a click
var calculate_click = function () {
    var subtotal = parseFloat( $("subtotal").value );
    var taxRate  = parseFloat( $("taxRate").value );
    $("salesTax").value = "";
    $("total").value = "";

    //If possibilities
    if ( isNaN(subtotal) || subtotal < 0 ) {
        alert("Subtotal must be a number that is zero or more!");
    } else if ( isNaN(taxRate) || taxRate < 0 ) {
        alert("Tax Rate must be a number that is zero or more!");
    } else { // the math calculations
        var salesTax = subtotal * (taxRate / 100);
        salesTax = parseFloat( salesTax.toFixed(2) );
        var total = subtotal + salesTax;
        $("salesTax").value = salesTax;
        $("total").value = total.toFixed(2);
    }
};
//Loading the functions.
window.onload = function () {
    $("calculate").onclick = calculate_click;
    $("subtotal").focus();
};