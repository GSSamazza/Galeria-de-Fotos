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
    passwordInput.focus() // Foco no campo de senha
  }
}

// Verifica o login ao clicar no botão
loginButton.addEventListener("click", validateLogin)

// Verifica o login ao pressionar ENTER
passwordInput.addEventListener("keydown", (Event) => {
  if (Event.key == "Enter") {
    validateLogin()
  }
})

// Limpa a mensagem de erro enquanto o usuário digita
passwordInput.addEventListener("input", () => {
  errorMessage.textContent = ""
})

// Modal da galeria
const galleryImages = document.querySelectorAll(".gallery img")
const modal = document.getElementById("photoModal")
const modalImg = document.getElementById("modalImg")
const closeModal = document.getElementById("closeModal")

galleryImages.forEach((img) => {
  img.addEventListener("click", () => {
    modal.classList.add("active") // Adiciona animação
    modal.style.display = "flex"
    modalImg.src = img.src
  })
})

closeModal.addEventListener("click", () => {
  modal.classList.remove("active") // Remove animação
  modal.style.display = "none"
})

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active") // Remove animação
    modal.style.display = "none"
  }
})
