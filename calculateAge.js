const ID = {
  Age: "177403",  // readonly age display
  dob: "177402",  // datepicker
  category: "177396", // General/SC/BC
  specialCategory: "177600", // Widow/Divorced/NRI
  disability: "177398" // Yes/No
};

// Fixed cut-off date → 01-10-2025
const BASE_DATE = new Date(2025, 9, 1); // month index 0-based

function calculateAge(from, to) {
  let y = to.getFullYear() - from.getFullYear();
  let m = to.getMonth() - from.getMonth();
  let d = to.getDate() - from.getDate();
  if (d < 0) { m--; d += new Date(to.getFullYear(), to.getMonth(), 0).getDate(); }
  if (m < 0) { y--; m += 12; }
  return { years: y, months: m, days: d };
}

$(function () {
  $("#" + ID.Age).prop("readonly", true);

  function getMaxAge() {
    const special = $("#" + ID.specialCategory).val(); // Widow/Divorced/NRI
    const disability = $("#" + ID.disability).val(); // 1 = Yes, 2 = No

    if (disability === "1") return 47; // Divyang
    if (special === "2" || special === "3") return 47; // Widow or Divorced
    // SC/BC have extended limit if within general category?
    const category = $("#" + ID.category).val();
    if (category === "2" || category === "3") return 42; // SC or BC
    return 37; // default
  }

  $("#" + ID.dob).on("change blur", function () {
    const dob = $(this).datepicker("getDate");
    if (!dob) {
      $("#" + ID.Age).val("");
      return;
    }

    const age = calculateAge(dob, BASE_DATE);
    const maxAge = getMaxAge();

    if (age.years < 21) {
      alert("Applicant must be at least 21 years old as on 01-10-2025.");
      $(this).val(""); $("#" + ID.Age).val(""); return;
    }

    if (age.years > maxAge || (age.years === maxAge && (age.months > 0 || age.days > 0))) {
      alert(`Applicant must be less than or equal to ${maxAge} years old as on 01-10-2025.`);
      $(this).val(""); $("#" + ID.Age).val(""); return;
    }

    $("#" + ID.Age).val(`${age.years} Years ${age.months} Months ${age.days} Days`.toUpperCase());
  });

  // Recalculate age if any special category field changes
  $("#" + ID.specialCategory + ", #" + ID.disability + ", #" + ID.category).on("change", function () {
    $("#" + ID.dob).trigger("change");
  });
});
