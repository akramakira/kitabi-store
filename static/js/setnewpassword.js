let newPasswordInput = document.getElementById("set-new-password-input");
let newRepasswordInput = document.getElementById("set-new-repassword-input");

let isValidChangeNewPass = false;
let isValidChangeNewRepass = false;
["keyup", "mouseup"].forEach(function (event) {
  window.addEventListener(event, function (e) {
    if (e.target == newPasswordInput) {
        if (
            /[\w]+/.test(e.target.value) &&
            /[\W0-9]+/.test(e.target.value) &&
            e.target.value.length >= 8
            ) {
            document
                .querySelector(".set-new-password .new-password svg")
                .classList.add("disabled");
            isValidChangeNewPass = true;
            } else {
            document
                .querySelector(".set-new-password .new-password svg")
                .classList.remove("disabled");
            isValidChangeNewPass = false;
            }
    } else if (e.target == newRepasswordInput) {
        if (
            /[\w]+/.test(e.target.value) &&
            /[\W0-9]+/.test(e.target.value) &&
            e.target.value.length >= 8
            ) {
            document
                .querySelector(".set-new-password .new-repassword svg")
                .classList.add("disabled");
                isValidChangeNewRepass = true;
            } else {
            document
                .querySelector(".set-new-password .new-repassword svg")
                .classList.remove("disabled");
                isValidChangeNewRepass = false;
            }
    }

    if (document.getElementById("setnewpassword") != null) {
      if (isValidChangeNewPass && isValidChangeNewRepass) {
        document.getElementById("setnewpassword").removeAttribute("disabled", "");
      } else {
        document.getElementById("setnewpassword").setAttribute("disabled", "");
      }
    }
  });
});
