function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function handleStrings() {
  let name = document.getElementById("name").value.trim();
  let address = document.getElementById("address").value.trim();

  // String operations
  let paddedName = name.padStart(20, "*"); // Pad with * to length 20
  let reversedAddress = reverseString(address);
  let capitalizedName = capitalizeFirst(name);
  let nameArray = name.split(""); // Convert to array of characters
  let splitAddress = address.split(/[ ,.-]+/); // multiple delimiters: space, comma, dot, dash
  let containsStreet = address.includes("Street");
  let startsWithNo = address.startsWith("No");
  let endsWithIndia = address.endsWith("India");
  let replacedAddress = address.replace(/road/gi, "Rd.");

  // Results
  let result = `
    <b>Original Name:</b> ${name}<br>
    <b>Padded Name:</b> ${paddedName}<br>
    <b>Capitalized Name:</b> ${capitalizedName}<br>
    <b>Name to Array:</b> [${nameArray.join(", ")}]<br><br>

    <b>Original Address:</b> ${address}<br>
    <b>Reversed Address:</b> ${reversedAddress}<br>
    <b>Split Address (by space/comma/dot/dash):</b> [${splitAddress.join(" | ")}]<br>
    <b>Contains 'Street'?:</b> ${containsStreet ? "Yes" : "No"}<br>
    <b>Starts with 'No'?:</b> ${startsWithNo ? "Yes" : "No"}<br>
    <b>Ends with 'India'?:</b> ${endsWithIndia ? "Yes" : "No"}<br>
    <b>Replace 'road' with 'Rd.':</b> ${replacedAddress}
  `;

  document.getElementById("result").innerHTML = result;
}
