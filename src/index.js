import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
// devolver el docuemnto
const el = document.querySelector('textarea[name="user-input"]');
const char = document.querySelector(".chracters");
const spaces = document.querySelector(".nospaces");
const word = document.querySelector(".words");
const num = document.querySelector(".numbers");
const numSum = document.querySelector(".totalnumbers");
const countLenght = document.querySelector(".length");


el.addEventListener('keyup', ()=>{
  const saveText = el.value
  char.innerHTML= "Caracteres: " + analyzer.getCharacterCount(saveText)
  spaces.innerHTML="Caracteres sin espacios: " +analyzer.getCharacterCountExcludingSpaces(saveText)
  word.innerHTML= "Palabras: " + analyzer.getWordCount(saveText)
  num.innerHTML="Números: " + analyzer.getNumberCount(saveText)
  numSum.innerHTML="Suma de números: " + analyzer.getNumberSum(saveText)
  countLenght.innerHTML="Longitud: " + analyzer.getAverageWordLength(saveText)
 
}); 

//boton para resetear el textarea
const btnReset= document.getElementById('reset-button');
btnReset.addEventListener('click', ()=>{
  el.value= ''
  char.innerHTML= "Caracteres: 0"
  spaces.innerHTML="Caracteres sin espacios 0"
  word.innerHTML= "Palabras: 0"
  num.innerHTML="Números: 0"
  numSum.innerHTML="Suma total de números: 0";
  countLenght.innerHTML="Longitud de las palabras: 0"

});
  




