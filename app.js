const isEmpty = (text) => {
  return text.trim() === ''
}

const inputNumero1 = document.getElementById("numero1")
const inputNumero2 = document.getElementById("numero2")
const inputNumero3 = document.getElementById("numero3")

const resultNumero1 = document.getElementById('resultNumero1')
const resultNumero2 = document.getElementById('resultNumero2')
const resultNumero3 = document.getElementById('resultNumero3')

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
