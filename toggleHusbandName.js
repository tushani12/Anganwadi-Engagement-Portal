// Function to show/hide Husband's Name based on Marital Status
function toggleHusbandName() {
    const maritalVal = $("#177404").val(); // get selected value of Marital Status
    
    if (maritalVal === "1") { // Yes selected
        $("#177405").closest(".tdata").show(); // show the field container
    } else { // No or Please Select
        $("#177405").closest(".tdata").hide(); // hide container
        $("#177405").val(""); // clear any existing value
    }
}

// On page load, hide Husband's Name field initially
$(document).ready(function() {
    $("#177405").closest(".tdata").hide(); // hide on load
    $("#177404").change(toggleHusbandName); // trigger function on change
});
