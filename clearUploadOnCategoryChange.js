function clearUploadOnCategoryChange(categoryFieldId, uploadFieldId) {
    $("#" + categoryFieldId).on("change", function () {
        // Clear the uploaded file input
        $("#" + uploadFieldId).val("");
    });
  return true;
}
