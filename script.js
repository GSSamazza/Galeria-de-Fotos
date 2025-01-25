// Senha definida
const correctPassword = "GieJu270424"

// Elementos
const loginScreen = document.getElementById("loginScreen")
const content = document.getElementById("content")
const passwordInput = document.getElementById("passwordInput")
const loginButton = document.getElementById("loginButton")
const errorMessage = document.getElementById("errorMessage")

// Função de validação
function validateLogin() {
  const enteredPassword = passwordInput.value

  if (enteredPassword === correctPassword) {
    loginScreen.style.display = "none"
    content.style.display = "block"
  } else {
    errorMessage.textContent = "Senha incorreta. Tente novamente."
    passwordInput.value = ""
  }
}

//Verifica o login ao clicar no botão
loginButton.addEventListener("click", validateLogin)

//Verifca o login ao pressionar ENTER
passwordInput.addEventListener("keydown", (Event) => {
  if (Event.key == "Enter") {
    validateLogin()
  }
})

// Modal da galeria
const galleryImages = document.querySelectorAll(".gallery img")
const modal = document.getElementById("photoModal")
const modalImg = document.getElementById("modalImg")
const closeModal = document.getElementById("closeModal")

galleryImages.forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "flex"
    modalImg.src = img.src
  })
})

closeModal.addEventListener("click", () => {
  modal.style.display = "none"
})

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none"
  }
})
