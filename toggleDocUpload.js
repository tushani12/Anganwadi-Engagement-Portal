function toggleDocUpload(controllerId, dependentId, srcElement){
    const controllerVal = $("#" + controllerId).val();

    if (controllerVal === "1" || controllerVal === "" || controllerVal === null) {
        // Hide if "No" (value=1) or empty
        $("#" + dependentId).closest(".tdata").hide();
        $("#" + dependentId).val(""); // clear when hidden
    } else {
        // Show if any other value
        $("#" + dependentId).closest(".tdata").show();
    }
return true;
