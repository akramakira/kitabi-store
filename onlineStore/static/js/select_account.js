let selectAccountInput = document.getElementById("selectaccount");

let isValidSelectAccount = false;

["keyup", "mouseup"].forEach(function (event) {
  window.addEventListener(event, function (e) {
    if (e.target == selectAccountInput) {
      if (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+[.][a-zA-Z]+$/.test(
            e.target.value
          )
      ) {
        document
          .querySelector(".select-account .select-account-code svg")
          .classList.add("disabled");
        isValidSelectAccount = true;
      } else {
        document
          .querySelector(".select-account .select-account-code svg")
          .classList.remove("disabled");
        isValidSelectAccount = false;
      }
    }

    if (document.getElementById("selectaccountbtn") != null) {
      if (isValidSelectAccount) {
        document.getElementById("selectaccountbtn").removeAttribute("disabled", "");
      } else {
        document.getElementById("selectaccountbtn").setAttribute("disabled", "");
      }
    }
  });
});
