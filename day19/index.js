const city = document.getElementById("city");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const gender1 = document.getElementById("gender1");
const gender2 = document.getElementById("gender2");
const email = document.getElementById("email");
const dob = document.getElementById("dob");
const address = document.getElementById("address");

const cityName = document.querySelector(".city");
const firstname = document.querySelector(".firstname");
const lastname = document.querySelector(".lastname");
const gender = document.querySelector(".gender");
const dobValue = document.querySelector(".dob");
const emailValue = document.querySelector(".email");
const addressValue = document.querySelector(".address");

//  validation ids

const errors = document.querySelectorAll(".error");
const cityVal = document.getElementById("cityVal");
const firstNameVal = document.getElementById("firstNameVal");

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!city.value) {
    cityVal.innerHTML = "Please select city";
    return;
  } else if (!firstName.value) {
    firstNameVal.innerHTML = "Please enter your firstname";
    return;
  }

  errors.forEach((element) => {
    element.innerHTML = "";
  });

  cityName.innerHTML = city.value;
  firstname.innerHTML = firstName.value;
  lastname.innerHTML = lastName.value;
  if (gender1.checked) {
    gender.innerHTML = gender1.value;
  } else if (gender2.checked) {
    gender.innerHTML = gender2.value;
  }
  dobValue.innerHTML = dob.value;
  emailValue.innerHTML = email.value;
  addressValue.innerHTML = address.value;
});
