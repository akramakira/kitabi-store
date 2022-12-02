let passwordCodeInput = document.getElementById("passwordcode");

let isValidPasswordCode = false;

["keyup", "mouseup"].forEach(function (event) {
  window.addEventListener(event, function (e) {
    if (e.target == passwordCodeInput) {
      if (
        /^[0-9]{4}$/.test(
            e.target.value
          )
      ) {
        document
          .querySelector(".confirm-owner .email-code svg")
          .classList.add("disabled");
        isValidPasswordCode = true;
      } else {
        document
          .querySelector(".confirm-owner .email-code svg")
          .classList.remove("disabled");
        isValidPasswordCode = false;
      }
    }

    if (document.getElementById("passwordcodebtn") != null) {
      if (isValidPasswordCode) {
        document.getElementById("passwordcodebtn").removeAttribute("disabled", "");
      } else {
        document.getElementById("passwordcodebtn").setAttribute("disabled", "");
      }
    }
  });
});
