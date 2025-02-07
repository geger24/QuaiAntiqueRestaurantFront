const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSingnin = document.getElementById("btnSignin");

btnSingnin.addEventListener("click", checkCredentials);

function checkCredentials() {
    //Ici, il faudra appeler l'API pour vérifier les credentials en BDD.

    if (mailInput.value == "test@mail.com" && passwordInput.value == "123") {
        //il faudra récupérer le vrai token
        const token = "fdgsdgsdgsdgsdgdsgdfgsdfgdsgddfgd";
        setToken(token);
        //placer ce token en cookie

        setCookie(RoleCookieName, "client", 7);

        window.location.replace("/");
    } else {
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}
