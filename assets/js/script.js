document.getElementById("btn-submit").addEventListener("click", (e) => {
  console.log("O botão foi clicado!");
});

document.querySelector("#form-login").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Os dados foram enviados.");

  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  let json = {
    email,
    password,
  };

  if (!json.email) {
    console.error("O campo e-mail deve ser preenchido!");
  } else if (!json.password) {
    console.error("O campo password deve ser preenchido!");
  } else {
    console.info("Dados validados com sucesso!");
  }
});
