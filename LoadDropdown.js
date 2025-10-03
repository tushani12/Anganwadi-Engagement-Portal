function loadDistricts() {
// Sample hierarchy data
const data = {
  "Amritsar": {
    "Tarsikka": [
      "Centre 3049110115 - Open",
      "Centre 3049110301 - SC"
    ],
    "Jandiala Guru": [
      "Centre 3049080312 - SC",
      "Centre 3049080401 - Open"
    ]
  },
  "Ludhiana": {
    "Sahnewal": [
      "Centre 20500101 - Open",
      "Centre 20500102 - Open"
    ],
    "Payal": [
      "Centre 20500201 - SC",
      "Centre 20500202 - Open"
    ]
  },
  "Patiala": {
    "Rajpura": [
      "Centre 30500101 - Open",
      "Centre 30500102 - Open"
    ],
    "Samana": [
      "Centre 30500201 - Open",
      "Centre 30500202 - SC"
    ]
  }
};

// Get dropdown elements by field IDs
const districtDropdown = document.getElementById("177568");
const blockDropdown = document.getElementById("177566");
const centreDropdown = document.getElementById("177569");

// Populate District dropdown

  districtDropdown.innerHTML = "<option value=''>Please Select</option>";
  Object.keys(data).forEach(district => {
    const opt = document.createElement("option");
    opt.value = district;
    opt.text = district;
    districtDropdown.add(opt);
  });


// Populate Blocks based on selected District
districtDropdown.addEventListener("change", () => {
  blockDropdown.innerHTML = "<option value=''>Please Select</option>";
  centreDropdown.innerHTML = "<option value=''>Please Select</option>";
  const selectedDistrict = districtDropdown.value;
  if (selectedDistrict && data[selectedDistrict]) {
    Object.keys(data[selectedDistrict]).forEach(block => {
      const opt = document.createElement("option");
      opt.value = block;
      opt.text = block;
      blockDropdown.add(opt);
    });
  }
});

// Populate Centres based on selected Block
blockDropdown.addEventListener("change", () => {
  centreDropdown.innerHTML = "<option value=''>Please Select</option>";
  const selectedDistrict = districtDropdown.value;
  const selectedBlock = blockDropdown.value;
  if (selectedDistrict && selectedBlock && data[selectedDistrict][selectedBlock]) {
    data[selectedDistrict][selectedBlock].forEach(centre => {
      const opt = document.createElement("option");
      opt.value = centre;
      opt.text = centre;
      centreDropdown.add(opt);
    });
  }
});

return true;
}