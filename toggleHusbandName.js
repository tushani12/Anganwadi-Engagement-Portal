function toggleHusbandName(controllerId, dependentId) {
    const controllerVal = $("#" + controllerId).val(); 
    
    if (controllerVal === "1") { // Yes selected
        $("#" + dependentId).closest(".tdata").show();
    } else {
        $("#" + dependentId).closest(".tdata").hide();
        $("#" + dependentId).val("");
    }
return true;
}