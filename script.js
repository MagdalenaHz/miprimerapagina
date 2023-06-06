function showAlert() {
    alert("¡Hola, esta es un alerta desde JavaScript!")
}
const form = document.getElementById("myForm")
function validateEmail(email) {
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}
function validateForm() {
    const input = document.gptElemenById("email")
    const inputValue = input.value 
    if (!validateEmail(inputValue)) {
        alert('Por favor, imgrese un correo Válido.')
    } else{
        alert('Correo electronico enviado correctamente')
    }
}
if (form){
form.addEventListener("submint", function(lala) {lala.preventDefault()
    validateForm();
    })
}    
document.querySelector("button.button-menu-toggle")
.addEventListener ("click", function() {
document.querySelector(".nav-links").classList.toggle("nav-links-responsive")
})