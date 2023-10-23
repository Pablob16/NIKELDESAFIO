const myModal = new bootstrap.Modal("#exampleModal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");
document.getElementById("login-form").addEventListener("submit", function(e) { 
    e.preventDefault();

    const email = document.getElementById("email-login").value;
    const password = document.getElementById("password-login").value;

const account = getAccount(email)
if(!account) {
    alert("Opps! Verifique o usuário ou a senha.");
    return;
}

if(account) {
    if(account.password !== password) {
        alert("Opps! Verifique o usuário ou a senha.");
    return;
    }}
    saveSession(email)
    window.location.href="home.html"
});
//LOGAR NO SISTEMA
function getAccount(Key) {
    const account = localStorage.getItem(Key);
    if(account) {
        return JSON.parse(account);
    }

    return "";
}
function saveSession(data) {
        

    sessionStorage.setItem("logged", data);
}
//CRIAR CONTA
document.getElementById("create-form").addEventListener("submit", function(e) { 
    e.preventDefault();
    
    const email = document.getElementById("email-create").value;
    const password = document.getElementById("password-create").value;
    const password2 = document.getElementById("password-create2").value;

    if(password !== password2){
        alert("As senhas não são iguais");
        return;
    }
    if(email.length < 5) {
    alert("Preencha o campo com um e-mail válido.");
    return;
}

if(password.length < 4) {
    alert("Preencha a senha com no mínimo 4 dígitos.");
    return;
}

saveAccount({
    login: email,
    password: password,
    transactions: transactions,
});

myModal.hide();

alert("Conta criada com sucesso.");
});

function saveAccount(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}