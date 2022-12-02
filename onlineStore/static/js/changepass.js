let oldPasswordInput = document.getElementById("old-password-input");
let newPasswordInput = document.getElementById("new-password-input");
let newRepasswordInput = document.getElementById("new-repassword-input");

let isValidChangeOldPass = false;
let isValidChangeNewPass = false;
let isValidChangeNewRepass = false;
["keyup", "mouseup"].forEach(function (event) {
  window.addEventListener(event, function (e) {
    if (e.target == oldPasswordInput) {
      if (
        /[\w]+/.test(e.target.value) &&
        /[\W0-9]+/.test(e.target.value) &&
        e.target.value.length >= 8
      ) {
        document
          .querySelector(".set-new-password .old-password svg")
          .classList.add("disabled");
        isValidChangeOldPass = true;
      } else {
        document
          .querySelector(".set-new-password .old-password svg")
          .classList.remove("disabled");
        isValidChangeOldPass = false;
      }
    } else if (e.target == newPasswordInput) {
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

    if (document.getElementById("setnewpasswordbtn") != null) {
      if (isValidChangeOldPass && isValidChangeNewPass && isValidChangeNewRepass) {
        document.getElementById("setnewpasswordbtn").removeAttribute("disabled", "");
      } else {
        document.getElementById("setnewpasswordbtn").setAttribute("disabled", "");
      }
    }
  });
});
