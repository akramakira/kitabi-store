let opnedItem = 0;
let comingItem = 1;
let carItems = document.querySelectorAll(".carousel .daily-offer-card");

window.onload = () => {
  for (const carItem of carItems) {
    let visibleSVG = `<svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="indicator-active"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
              </svg>`;
    let hiddenSVG = `<svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="8" />
                    </svg>`;
    if (carItem.classList.contains("initial")) {
      indicator.innerHTML += visibleSVG;
    } else {
      indicator.innerHTML += hiddenSVG;
    }
  }
  // if (lang1.classList.contains("select")) {
  //   language.children[0].children[0].innerHTML = "Arabic";
  // } else if (lang2.classList.contains("select")) {
  //   language.children[0].children[0].innerHTML = "English";
  // }
};

let navListItems = document.querySelectorAll(".navbar .nav-items ul li");

for (const navListItem of navListItems) {
  navListItem.onclick = () => {
    for (const navItem of navListItems) {
      navItem.classList.remove("active-nav");
    }
    navListItem.classList.add("active-nav");
  };
}

if (carItems.length) {
  setInterval(() => {
    if (comingItem == carItems.length) {
      comingItem = 0;
    }

    carItems[opnedItem].classList.add("hidden");
    carItems[opnedItem].classList.remove("visible");
    carItems[opnedItem].classList.remove("initial");
    carItems[comingItem].classList.add("visible");
    carItems[comingItem].classList.remove("hidden");

    opnedItem = comingItem++;
    let indicator = document.getElementById("indicator");
    indicator.innerHTML = "";
    for (const carItem of carItems) {
      let visibleSVG = `<svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="indicator-active"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
          </svg>`;
      let hiddenSVG = `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>`;
      if (carItem.classList.contains("visible")) {
        indicator.innerHTML += visibleSVG;
      } else {
        indicator.innerHTML += hiddenSVG;
      }
    }
  }, 10000);
}

let body = [
  document.querySelector(".body-container"),
  document.querySelector(".login-nav"),
  document.querySelector(".header-container"),
];

let language = document.getElementById("lang");
let lang1 = document.querySelector(".lang1");
let lang2 = document.querySelector(".lang2");

let loginPage = document.querySelector(".login-page-container");
let signinPage = document.querySelector(".signin-page-container");

let ouSignin = document.querySelector(".ou-sign-in");
let ouLogin = document.querySelector(".ou-log-in");

let emailInput = document.getElementById("login-email-input");
let passInput = document.getElementById("login-password-input");

let signinUsernameInput = document.getElementById("signin-username-input");
let signinEmailInput = document.getElementById("signin-email-input");
let signinPasswordInput = document.getElementById("signin-password-input");

let viewBooks = document.querySelectorAll(".view");

let bSellers = document.querySelectorAll(
  `.best-sellers-container .best-sellers .best-seller,
  .new-books-container .new-books .new-book,
  .categorie-body .book`
);
let Categories = document.querySelectorAll(
  ".categories-container .categories .categorie, .categorie-card .categorie-head"
);

let context = {
  head: document.getElementById("language"),
  logIn: document.getElementById("log-in"),
  signIn: document.getElementById("sign-in"),
  navLogo: document.getElementById("nav-logo"),
  navHome: document.getElementById("home"),
  navBestsellers: document.getElementById("bestsellers"),
  navNewBooks: document.getElementById("new-books"),
  navCategories: document.getElementById("categories"),
  contact: document.getElementById("contact"),
  buyBtns: document.querySelectorAll(".actions .buy"),
  viewBtns: document.querySelectorAll(".view-more"),
  bestsellersTitle: document.getElementById("bseller"),
  newBooksTitle: document.getElementById("nbooks"),
  categoriesTitle: document.getElementById("categ"),
  copyright: document.querySelector(".copyright"),

  loginTitle: document.querySelector(".login-title"),
  forget: document.querySelector(".forget"),
  logIn2: document.querySelector(".login-btn"),
  signIn2: document.querySelector(".ou-sign-in"),
  loginEmail: document.querySelector(".login-email"),
  loginPassword: document.querySelector(".login-password"),
  ou: document.querySelector(".ou"),

  signinTitle: document.querySelector(".signin-title"),
  agree: document.querySelector(".agree"),
  signIn3: document.querySelector(".signin-btn"),
  logIn3: document.querySelector(".ou-log-in"),
  signinUsername: document.querySelector(".signin-username"),
  signinEmail: document.querySelector(".signin-email"),
  signinPassword: document.querySelector(".signin-password"),
  signinRepassword: document.querySelector(".signin-repassword"),
  signOu: document.querySelector(".sign-ou"),

  search: document.getElementById("search"),
  searchInput: document.querySelector(".search-input"),
  titleLab: document.getElementById("titleLab"),
  authorLab: document.getElementById("authorLab"),
  categorieLab: document.getElementById("categorieLab"),
  result: document.getElementById("search-result"),

  categories: document.querySelectorAll(
    ".categorie-card .categorie-head h2 span"
  ),
};

let ar = {
  direction: "rtl",
  logIn: "الدخول",
  signIn: "جديد",
  navLogo: "كتابي ستور",
  navHome: "الرئيسية",
  navBestsellers: "الأكثر مبيعا",
  navNewBooks: "جديد",
  navCategories: "الفئات",
  contact: `
  <span id="contact">
    للاتصال بنا: <bdi> 0666 66 66 66 </bdi> أو
    <a href="mailto:support@kitabi.com">support@kitabi.com</a>
  </span>
  `,
  buyBtn: "شراء الآن",
  viewBtn: "عرض المزيد",
  bestsellersTitle: "الكتب الأكثر مبيعا",
  newBooksTitle: "الكتب الجديدة",
  categoriesTitle: "الفئات",
  copyright: "جميع الحقوق محفوظة &copy; 2022 كتابي ستور",

  loginTitle: "تسجيل الدخول",
  forget: "هل نسيت كلمة السر؟",
  signinTitle: "حساب جديد",
  loginEmail: "إسم المستخدم",
  loginPassword: "كلمة السر",
  ou: "أو",

  agree: `من خلال إنشاء حساب ، فإنك توافق على  
  <a href="#"> شروط الاستخدام </a>
  و
  <a href="#"> سياسة الخصوصية</a>.`,
  signinUsername: "إسم المستخدم",
  signinEmail: "البريد الالكتروني",
  signinPassword: "كلمة السر",
  signinRepassword: "اعادة كلمة السر",
  signOu: "أو",

  search: "البحث",
  searchInput: "عنوان الكتاب، الكاتب، الفئة",
  titleLab: "العنوان",
  authorLab: "الكاتب",
  categorieLab: "الفئة",
  result: "للأسف، لا توجد أي نتائج توافق بحثك",

  categories: [
    "كتب الحرب",
    "كتب رومانسية",
    "كتب سياسية",
    "كتب علمية",
    "كتب رواد الفضاء",
    "كتب عربية",
    "كتب فرنسية",
  ],
};

let en = {
  direction: "ltr",
  logIn: "log-in",
  signIn: "sign-in",
  navLogo: "kitabi store",
  navHome: "home",
  navBestsellers: "bestsellers",
  navNewBooks: "new",
  navCategories: "categories",
  contact: `
    <span id="contact">
      contact us on: 0666 66 66 66 or
      <a href="mailto:support@kitabi.com">support@kitabi.com</a>
    </span>
  `,
  buyBtn: "buy now",
  viewBtn: "view more",
  bestsellersTitle: "Books Bestsellers",
  newBooksTitle: "New Books",
  categoriesTitle: "Categories",
  copyright: "all rights reserved &copy; 2022 Kitabi-Store",

  loginTitle: "log in",
  forget: "forget password?",
  signinTitle: "sign in",
  loginEmail: "Username",
  loginPassword: "Password",
  ou: "ou",

  agree: `By creating an account, you agree to our
    <a href="#"> Conditions of Use </a> and
    <a href="#"> Privacy Notice</a>.`,
  signinUsername: "Username",
  signinEmail: "Email",
  signinPassword: "Password",
  signinRepassword: "Re-password",
  signOu: "ou",

  search: "search",
  searchInput: "book title, author, categorie",
  titleLab: "title",
  authorLab: "author",
  categorieLab: "categorie",
  result: "Sorry, we can't found any book with this search",

  categories: [
    "War books",
    "Romantic books",
    "Politic books",
    "Scientific books",
    "Astronaut books",
    "Arabic books",
    "French books",
  ],
};

function changeLanguage(langu) {
  // document.getElementById("setlangnext").value = lang;
  document.getElementById("setlangcode").value = langu;
  // setInterval(() => {
    document.forms["setlang"].submit();
  // },10000)
}

let headerContainer = document.getElementById('header-container')
let navbarList = document.getElementById('nav-list')
let sideNavbar = document.getElementById('side-navbar')
let sideNavbarItems = [].slice.call(sideNavbar.children);
sideNavbarItems.push(sideNavbarItems[0].firstElementChild);
for (let index = 0; index < sideNavbarItems[1].children.length; index++) {
  sideNavbarItems.push(sideNavbarItems[1].children[index]);
  sideNavbarItems.push(sideNavbarItems[1].children[index].firstElementChild);
}
window.addEventListener("click", function (e) {
  if (
    e.target != language &&
    e.target.parentNode != language &&
    e.target.parentNode.parentNode != language &&
    e.target.parentNode.parentNode.parentNode != language
  ) {
    language.classList.remove("clicked");
    lang1.style.cssText = "display: none;";
    lang2.style.cssText = "display: none;";
  } else {
    if (!language.classList.contains("clicked")) {
      language.classList.add("clicked");
      lang1.style.cssText = "display: flex;";
      lang2.style.cssText = "display: flex;";
    } else {
      if (e.target == lang1) {
        if (!lang1.classList.contains("select")) {
          lang2.classList.remove("select");
          lang1.classList.add("select");
          language.children[0].children[0].innerHTML = "العربية";
          // changeLanguage(ar);
        }
      } else if (e.target == lang2) {
        if (!lang2.classList.contains("select")) {
          lang1.classList.remove("select");
          lang2.classList.add("select");
          language.children[0].children[0].innerHTML = "English";
          // changeLanguage(en);
        }
      }
      language.classList.remove("clicked");
      lang1.style.cssText = "display: none;";
      lang2.style.cssText = "display: none;";
    }
  }

  if (
    e.target == navbarList || e.target == navbarList.firstElementChild || e.target == navbarList.firstElementChild.firstElementChild ||
    sideNavbarItems.includes(e.target) || e.target == sideNavbar
  ) {
    openleftnav();
  } else {
    headerContainer.setAttribute("data-leftnav", "close");
    sideNavbar.setAttribute("data-leftnav", "close")
  }

  if (user) {
    if (
      e.target != user &&
      e.target.parentNode != user &&
      e.target.parentNode.parentNode != user &&
      e.target.parentNode.parentNode.parentNode != user
    ) {
      user.classList.remove("clicked");
    } else if (
      (e.target == user) |
      (e.target.parentNode == user) |
      (e.target.parentNode.parentNode == user) |
      (e.target.parentNode.parentNode.parentNode == user)
    ) {
      user.classList.add("clicked");
    }
  }

  if (e.target == ouLogin) {
    signinPage.classList.add("disabled");
    loginPage.classList.remove("disabled");
  } else if (e.target == ouSignin) {
    signinPage.classList.remove("disabled");
    loginPage.classList.add("disabled");
  }

  if (e.target == loginPage && !loginPage.classList.contains("disabled")) {
    for (const e of body) {
      e.classList.remove("halfOpacity");
    }
    loginPage.classList.add("disabled");
  }
  if (e.target == signinPage && !signinPage.classList.contains("disabled")) {
    for (const e of body) {
      e.classList.remove("halfOpacity");
    }
    signinPage.classList.add("disabled");
  }
});

if (context.logIn) {
  context.logIn.addEventListener("click", function (e) {
    if (
      e.target == context.logIn &&
      !e.target.classList.contains("halfOpacity")
    ) {
      for (const e of body) {
        e.classList.add("halfOpacity");
      }
      loginPage.classList.remove("disabled");
    }
  });
}

if (context.signIn) {
  context.signIn.addEventListener("click", function (e) {
    if (
      e.target == context.signIn &&
      !e.target.classList.contains("halfOpacity")
    ) {
      for (const e of body) {
        e.classList.add("halfOpacity");
      }
      signinPage.classList.remove("disabled");
    }
  });
}

let user = document.getElementById("user");
let userName = document.getElementById("user-name");
let userProfile = document.getElementById("user-profile");
let userLogOut = document.getElementById("user-log-out");

if (user) {
  user.addEventListener("click", function (e) {});
}

let isValidLEmail = false;
let isValidLPass = false;

let isValidSUsername = false;
let isValidSEmail = false;
let isValidSPass = false;

let isValidFname = false;
let isValidLname = false;
let isValidAddress = false;
let isValidPhone = false;

let isChangedFname = false;
let isChangedLname = false;
let isChangedAddress = false;
let isChangedPhone = false;

window.addEventListener("keyup", function (e) {
  if (e.target == emailInput) {
    if (
      /^[a-zA-Z0-9]+((_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]*$/.test(e.target.value) &&
      e.target.value.length >= 8
    ) {
      document
        .querySelector(".login-page .login-email svg")
        .classList.add("disabled");
      isValidLEmail = true;
    } else {
      document
        .querySelector(".login-page .login-email svg")
        .classList.remove("disabled");
      isValidLEmail = false;
    }
  } else if (e.target == passInput) {
    if (
      /[\w]+/.test(e.target.value) &&
      /[\W0-9]+/.test(e.target.value) &&
      e.target.value.length >= 8
    ) {
      document
        .querySelector(".login-page .login-password svg")
        .classList.add("disabled");
      isValidLPass = true;
    } else {
      document
        .querySelector(".login-page .login-password svg")
        .classList.remove("disabled");
      isValidLPass = false;
    }
  }

  if (e.target == signinUsernameInput) {
    if (
      /^[a-zA-Z0-9]+((_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]*$/.test(e.target.value) &&
      e.target.value.length >= 8
    ) {
      document
        .querySelector(".signin-page .signin-username svg")
        .classList.add("disabled");
      isValidSUsername = true;
    } else {
      document
        .querySelector(".signin-page .signin-username svg")
        .classList.remove("disabled");
      isValidSUsername = false;
    }
  } else if (e.target == signinEmailInput) {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+[.][a-zA-Z]+$/.test(
        e.target.value
      )
    ) {
      document
        .querySelector(".signin-page .signin-email svg")
        .classList.add("disabled");
      isValidSEmail = true;
    } else {
      document
        .querySelector(".signin-page .signin-email svg")
        .classList.remove("disabled");
      isValidSEmail = false;
    }
  } else if (e.target == signinPasswordInput) {
    if (
      /[\w]+/.test(e.target.value) &&
      /[\W0-9]+/.test(e.target.value) &&
      e.target.value.length >= 8
    ) {
      document
        .querySelector(".signin-page .signin-password svg")
        .classList.add("disabled");
      isValidSPass = true;
    } else {
      document
        .querySelector(".signin-page .signin-password svg")
        .classList.remove("disabled");
      isValidSPass = false;
    }
  }

  if (document.getElementById("loginBtn") != null) {
    if (isValidLEmail && isValidLPass) {
      document.getElementById("loginBtn").removeAttribute("disabled", "");
    } else {
      document.getElementById("loginBtn").setAttribute("disabled", "");
    }
  }

  if (document.getElementById("signinBtn") != null) {
    if (isValidSEmail && isValidSPass && isValidSUsername) {
      document.getElementById("signinBtn").removeAttribute("disabled", "");
    } else {
      document.getElementById("signinBtn").setAttribute("disabled", "");
    }
  }
});

function selectType(type) {
  let titleRad = document.getElementById("titleRad");
  let titleLab = document.getElementById("titleLab");
  let authorRad = document.getElementById("authorRad");
  let authorLab = document.getElementById("authorLab");
  let categorieRad = document.getElementById("categorieRad");
  let categorieLab = document.getElementById("categorieLab");

  if (type == "author") {
    authorRad.checked = true;
    authorLab.dataset.ischecked = "true";
    titleLab.dataset.ischecked = "false";
    categorieLab.dataset.ischecked = "false";
  } else if (type == "title") {
    titleRad.checked = true;
    authorLab.dataset.ischecked = "false";
    titleLab.dataset.ischecked = "true";
    categorieLab.dataset.ischecked = "false";
  } else if (type == "categorie") {
    categorieRad.checked = true;
    authorLab.dataset.ischecked = "false";
    titleLab.dataset.ischecked = "false";
    categorieLab.dataset.ischecked = "true";
  }
}


function openleftnav() {
    headerContainer.setAttribute("data-leftnav", "open");
    sideNavbar.setAttribute("data-leftnav", "open");
}