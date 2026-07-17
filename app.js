const isEmpty = (text) => {
  return text.trim() === ''
}

// Inputs
const inputNumero1 = document.getElementById("numero1")
const inputNumero2 = document.getElementById("numero2")
const inputNumero3 = document.getElementById("numero3")

// Box Result
const resultNumero1 = document.getElementById('resultMayor')
const resultNumero2 = document.getElementById('resultMedio')
const resultNumero3 = document.getElementById('resultMenor')

const btnCalcular = document.getElementById('btnCalcular')

btnCalcular.addEventListener('click', () => {
  if (
    isEmpty(inputNumero1.value) ||
    isEmpty(inputNumero2.value) ||
    isEmpty(inputNumero3.value)
  ) {
    alert("Debes ingresar todos los números");
    return;
  }

  const numero1 = Number(inputNumero1.value)
  const numero2 = Number(inputNumero2.value)
  const numero3 = Number(inputNumero3.value)

  const numeros = [numero1, numero2, numero3].sort((a, b) => b - a);
  numeros

  resultNumero1.textContent = numeros[0];
  resultNumero2.textContent = numeros[1];
  resultNumero3.textContent = numeros[2];
})


const btnReset = document.getElementById('btnReset')

btnReset.addEventListener('click', () => {
  inputNumero1.value = ''
  inputNumero2.value = ''
  inputNumero3.value = ''

  resultNumero1.textContent = '0'
  resultNumero2.textContent = '0'
  resultNumero3.textContent = '0'
})