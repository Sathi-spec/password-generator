
const result = document.getElementById('result')
const length = document.getElementById('length')
const uppercase = document.getElementById('uppercase')
const lowercase = document.getElementById('lowercase')
const numbers= document.getElementById('numbers')
const symbols = document.getElementById('symbols')
const generate = document.getElementById('generate')
const clipboard = document.getElementById('clipboard')

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower="abcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
const sym = "!@#$%^&*(){}[]=<>/,.";



generate.addEventListener("click", () => {
  let pwd ='';

 uppercase.checked ?(pwd +=upper) :"";
 lowercase.checked ? (pwd +=lower) : "";
  numbers.checked ? (pwd += num) : "";
  symbols.checked ? (pwd += sym) : "";
  result.innerText= generatePassword(length.value, pwd);
});

const generatePassword = (length, pwd) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += pwd.charAt(
      Math.floor(Math.random() * pwd.length)
    );
  }
  return password;
};


clipboard.addEventListener("click", () => {
  const textarea=document.createElement('textarea')
  const pass= result.innerText
  textarea.value=pass
  document.body.appendChild(textarea)
  textarea.select();
  document.execCommand('copy')
  textarea.remove()
  alert("password copied")
});
// clipboard.addEventListener('click', () => {
//     const textarea = document.createElement('textarea')
//     const password = result.innerText

//     if(!password) { return }

//     textarea.value = password
//     document.body.appendChild(textarea)
//     textarea.select()
//     document.execCommand('copy')
//     textarea.remove()
//     alert('Password copied to clipboard!')
// })

// const resultEl = document.getElementById('result')
// const lengthEl = document.getElementById('length')
// const uppercaseEl = document.getElementById('uppercase')
// const lowercaseEl = document.getElementById('lowercase')
// const numbersEl = document.getElementById('numbers')
// const symbolsEl = document.getElementById('symbols')
// const generateEl = document.getElementById('generate')
// const clipboardEl = document.getElementById('clipboard')

// const randomFunc = {
//     lower: getRandomLower,
//     upper: getRandomUpper,
//     number: getRandomNumber,
//     symbol: getRandomSymbol
// }

// clipboardEl.addEventListener('click', () => {
//     const textarea = document.createElement('textarea')
//     const password = resultEl.innerText

//     if(!password) { return }

//     textarea.value = password
//     document.body.appendChild(textarea)
//     textarea.select()
//     document.execCommand('copy')
//     textarea.remove()
//     alert('Password copied to clipboard!')
// })

// generateEl.addEventListener('click', () => {
//     const length = +lengthEl.value
//     const hasLower = lowercaseEl.checked
//     const hasUpper = uppercaseEl.checked
//     const hasNumber = numbersEl.checked
//     const hasSymbol = symbolsEl.checked

//     resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
// })

// function generatePassword(lower, upper, number, symbol, length) {
//     let generatedPassword = ''
//     const typesCount = lower + upper + number + symbol
//     const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])
    
//     if(typesCount === 0) {
//         return ''
//     }

//     for(let i = 0; i < length; i += typesCount) {
//         typesArr.forEach(type => {
//             const funcName = Object.keys(type)[0]
//             generatedPassword += randomFunc[funcName]()
//         })
//     }

//     const finalPassword = generatedPassword.slice(0, length)

//     return finalPassword
// }

// function getRandomLower() {
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
// }

// function getRandomUpper() {
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
// }

// function getRandomNumber() {
//     return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
// }

// function getRandomSymbol() {
//     const symbols = '!@#$%^&*(){}[]=<>/,.'
//     return symbols[Math.floor(Math.random() * symbols.length)]
// }  