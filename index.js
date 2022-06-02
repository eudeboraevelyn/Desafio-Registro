const $password = document.querySelector(".password");
const $image = document.querySelector(".image");

$image.onclick = () => {
  if ($password.type === "password") {
    $password.type = "text";
    $image.src = "open.png";
  } else {
    $password.type = "password";
    $image.src = "close.png";
  }
};
