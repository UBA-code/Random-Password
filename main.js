let number = document.querySelector(".inpt");
let pass = document.querySelector(".pass-area")
function gen(num) {
    let alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOP~~[{{[|{#||\[`@^\}]~{#{|[{#`||{\`+*-/+¤€€@@@QRSTUVWXYZ0123456789";
    let password = "";
    let textArea = document.querySelector(".pass-area");
    num = number.value;
    alpha.split("");
    for (let i = 0; i < num; i++) {
        password += alpha.charAt(Math.round(Math.random() * alpha.length))
    }
    textArea.textContent = password;
}