const $form = document.querySelector("#carta-a-santa");
const userName = $form.nombre.value;
const city = $form.ciudad.value;
const behaviour = $form.comportamiento.value;
const giftDescription = $form["descripcion-regalo"].value;

function validateName(userName) {
  if (userName.length === 0) {
    return "This field should contain atleast 1 character";
  }

  if (userName.length >= 50) {
    return "This field should contain less than 50 characters";
  }
  return "userName";
}

function validateCity(city) {
  if (city === "") {
    return "You must choose a city";
  }
  return "city";
}

function validateGiftDescription(giftDescription) {
  if (giftDescription.length === 0) {
    return "This field can't be empty, make sure to fill it with your wished gift";
  }

  if (giftDescription.length >= 150) {
    return "The description you've given is too large";
  }
  return "giftDescription";
}

function validateBehaviour(behaviour) {
  if (behaviour === "") {
    return "Let santa know how you behave this year !";
  }
  return "behaviour";
}
