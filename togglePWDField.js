function togglePWDField() {
    const controllerVal = $("#177398").val(); // Person with Disability

    const dependents = ["177601", "177602"]; // Type and Percentage fields

    if (controllerVal === "1") { // Yes selected
        dependents.forEach(id => {
            $("#" + id).closest(".tdata").show();
        });
    } else { // No or Please Select
        dependents.forEach(id => {
            $("#" + id).closest(".tdata").hide();
            $("#" + id).val(""); // clear value
        });
    }
return true;
}

