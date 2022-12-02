let profileFnameInput = document.getElementById("profile-fname-input");
let profileLnameInput = document.getElementById("profile-lname-input");
let profileAddressInput = document.getElementById("profile-address-input");
let profilePhoneInput = document.getElementById("profile-phone-input");

["keyup", "mouseup"].forEach(function (event) {
  window.addEventListener(event, function (e) {
    if (e.target == profileFnameInput) {
      if (
        /^[\u0621-\u064Aa-zA-Z0-9(é|è)]+$/.test(e.target.value) &&
        e.target.value.length >= 3
      ) {
        document
          .querySelector(".create-profile .profile-fname svg")
          .classList.add("disabled");
        isValidFname = true;
      } else {
        document
          .querySelector(".create-profile .profile-fname svg")
          .classList.remove("disabled");
        isValidFname = false;
      }
    } else if (e.target == profileLnameInput) {
      if (
        /^[\u0621-\u064Aa-zA-Z0-9(é|è)]+$/.test(e.target.value) &&
        e.target.value.length >= 3
      ) {
        document
          .querySelector(".create-profile .profile-lname svg")
          .classList.add("disabled");
        isValidLname = true;
      } else {
        document
          .querySelector(".create-profile .profile-lname svg")
          .classList.remove("disabled");
        isValidLname = false;
      }
    } else if (e.target == profileAddressInput) {
      if (
        /^([\u0621-\u064Aa-zA-Z0-9(é|è)]+(_|-| )*[\u0621-\u064Aa-zA-Z0-9(é|è)]+)+$/.test(
          e.target.value
        ) &&
        e.target.value.length >= 3
      ) {
        document
          .querySelector(".create-profile .profile-address svg")
          .classList.add("disabled");
        isValidAddress = true;
      } else {
        document
          .querySelector(".create-profile .profile-address svg")
          .classList.remove("disabled");
        isValidAddress = false;
      }
    } else if (e.target == profilePhoneInput) {
      if (
        /^(00213|\+213|0)(5|6|7)[0-9]{8}$/.test(e.target.value) &&
        e.target.value.length > 9
      ) {
        document
          .querySelector(".create-profile .profile-phone svg")
          .classList.add("disabled");
        isValidPhone = true;
      } else {
        document
          .querySelector(".create-profile .profile-phone svg")
          .classList.remove("disabled");
        isValidPhone = false;
      }
    }

    if (document.getElementById("createBtn") != null) {
      if (isValidFname && isValidLname && isValidAddress && isValidPhone) {
        document.getElementById("createBtn").removeAttribute("disabled", "");
      } else {
        document.getElementById("createBtn").setAttribute("disabled", "");
      }
    }
  });
});
