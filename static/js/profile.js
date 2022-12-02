let editProfileFnameInput = document.getElementById("edit-profile-fname-input");
let editProfileLnameInput = document.getElementById("edit-profile-lname-input");
let editProfileAddressInput = document.getElementById(
  "edit-profile-address-input"
);
let editProfilePhoneInput = document.getElementById("edit-profile-phone-input");

let editProfileFnameInputValue = document.getElementById(
  "edit-profile-fname-input"
).value;
let editProfileLnameInputValue = document.getElementById(
  "edit-profile-lname-input"
).value;
let editProfileAddressInputValue = document.getElementById(
  "edit-profile-address-input"
).value;
let editProfilePhoneInputValue = document.getElementById(
  "edit-profile-phone-input"
).value;
window.addEventListener("keyup", function (e) {
  if (e.target == editProfileFnameInput) {
    if (e.target.value == editProfileFnameInputValue) {
      document
        .querySelector(".profile .profile-fname svg")
        .classList.add("disabled");
      isChangedFname = false;
    } else if (
      /^[\u0621-\u064Aa-zA-Z0-9(é|è)]+$/.test(e.target.value) &&
      e.target.value.length >= 3
    ) {
      document
        .querySelector(".profile .profile-fname svg")
        .classList.add("disabled");
      isValidFname = true;
      isChangedFname = true;
    } else {
      document
        .querySelector(".profile .profile-fname svg")
        .classList.remove("disabled");
      isValidFname = false;
      isChangedFname = true;
    }
  } else if (e.target == editProfileLnameInput) {
    if (e.target.value == editProfileLnameInputValue) {
      document
        .querySelector(".profile .profile-lname svg")
        .classList.add("disabled");
      isChangedLname = false;
    } else if (
      /^[\u0621-\u064Aa-zA-Z0-9(é|è)]+$/.test(e.target.value) &&
      e.target.value.length >= 3
    ) {
      document
        .querySelector(".profile .profile-lname svg")
        .classList.add("disabled");
      isValidLname = true;
      isChangedLname = true;
    } else {
      document
        .querySelector(".profile .profile-lname svg")
        .classList.remove("disabled");
      isValidLname = false;
      isChangedLname = true;
    }
  } else if (e.target == editProfileAddressInput) {
    if (e.target.value == editProfileFnameInputValue) {
      document
        .querySelector(".profile .profile-address svg")
        .classList.add("disabled");
      isChangedAddress = false;
    } else if (
      /^([\u0621-\u064Aa-zA-Z0-9(é|è)]+(_|-| )*[\u0621-\u064Aa-zA-Z0-9(é|è)]+)+$/.test(
        e.target.value
      ) &&
      e.target.value.length >= 3
    ) {
      document
        .querySelector(".profile .profile-address svg")
        .classList.add("disabled");
      isValidAddress = true;
      isChangedAddress = true;
    } else {
      document
        .querySelector(".profile .profile-address svg")
        .classList.remove("disabled");
      isValidAddress = false;
      isChangedAddress = true;
    }
  } else if (e.target == editProfilePhoneInput) {
    if (e.target.value == editProfileFnameInputValue) {
      document
        .querySelector(".profile .profile-phone svg")
        .classList.add("disabled");
      isChangedPhone = false;
    } else if (
      /^(00213|\+213|0)(5|6|7)[0-9]{8}$/.test(e.target.value) &&
      e.target.value.length > 9
    ) {
      document
        .querySelector(".profile .profile-phone svg")
        .classList.add("disabled");
      isValidPhone = true;
      isChangedPhone = true;
    } else {
      document
        .querySelector(".profile .profile-phone svg")
        .classList.remove("disabled");
      isValidPhone = false;
      isChangedPhone = true;
    }
  }

  if (document.getElementById("save") != null) {
    if (
      (isValidFname || !isChangedFname) &&
      (isValidLname || !isChangedLname) &&
      (isValidAddress || !isChangedAddress) &&
      (isValidPhone || !isChangedPhone)
    ) {
      console.log("abled");
      document.getElementById("save").removeAttribute("disabled", "");
    } else {
      console.log("disabled");
      document.getElementById("save").setAttribute("disabled", "");
    }
  }
});
