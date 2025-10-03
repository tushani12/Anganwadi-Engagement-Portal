function calculateAge(Age, DateofBirth, srcElement){
    const ID = {
      Age: "177403",   // readonly “Age” display field
      dob: "177402"    // jQuery‑UI datepicker (dd/mm/yyyy)
    };
    
    const BASE_DATE = new Date(2025, 6, 31); // 31‑07‑2025 (fixed cut‑off)
    
    function calculateAge(from, to) {
      let y = to.getFullYear() - from.getFullYear();
      let m = to.getMonth()    - from.getMonth();
      let d = to.getDate()     - from.getDate();
      if (d < 0) { m--; d += new Date(to.getFullYear(), to.getMonth(), 0).getDate(); }
      if (m < 0) { y--; m += 12; }
      return { years: y, months: m, days: d };
    }
    
    $(function () {
    
      // keep the Age field readonly
      $("#" + ID.Age).prop("readonly", true);
    
      // whenever DoB changes, (re)calculate age as on 31-07-2025
      $("#" + ID.dob).on("change blur", function () {
    
        const dob = $(this).datepicker("getDate");   // null if empty/invalid
    
        if (!dob) {
          $("#" + ID.Age).val("");
          return;
        }
    
        const a = calculateAge(dob, BASE_DATE);
    
        if (a.years < 18) {
          alert("Applicant must be at least 18 years old as on 31-07-2025.");
          $(this).val("");
          $("#" + ID.Age).val("");
          return;
        }
    
        $("#" + ID.Age).val(
          `${a.years} Years ${a.months} Months ${a.days} Days`.toUpperCase()
        );
      });
    });
    
    return true;
    };