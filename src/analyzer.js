const analyzer = {  

  getWordCount: (text) => {
    const deleteSpaceText = text.trim()
    const resultWord = deleteSpaceText.split(' ')
    return resultWord.length;
  },
  getCharacterCount: (text) => {
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    const ex = text.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "")
    const exReplace = ex.length
    return exReplace
  //use expresiones regulares del Regex, ya que es la manera mas optima para ej ecutar este codigo 
  //y asi excluir de una vez los espacios y signos.
  },
  getAverageWordLength: (text) => { 
    const LengthCalculator = text.split(" ")
    let sum = 0
    for(let i=0; i<(LengthCalculator.length); i++){
      sum = sum+LengthCalculator[i].length
    }
    return Math.round((sum / LengthCalculator.length)*100)/100
  },
  getNumberCount: (text) => {
    const textSplit = text.split(' ')
    let acumulator=0
    for(let i=0; i < textSplit.length; i++){
      if(!isNaN(textSplit[i]) && textSplit[i] !== " "){  
        acumulator = acumulator + 1
      }
    }
    return acumulator
  },
  getNumberSum: (text) => {
    const sumText = text.split(' ');
    let acumulatorSum=0;
    for(let i=0; i<sumText.length; i++){
      if(sumText[i] === '') {
        continue;
      }
      if(!isNaN(sumText[i])){
        acumulatorSum = acumulatorSum + parseFloat(sumText[i]);
      }
    }
  return acumulatorSum;
    
  },
};

export default analyzer;




