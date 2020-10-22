// Variables
const userInput = document.querySelector(".userInput")
const userInputButton = document.querySelector(".userInputButton")
const surveyAnswers = data

let columnName
let answersToQuery = []
let listOfAnswers = []

console.log('Alle survey antwoorden:', surveyAnswers)

userInputButton.addEventListener('click', function(e){
  e.preventDefault();
  columnName = userInput.value;
  console.log('userInput is:', columnName)
  answersToQuery = getAnswerOfQuery(surveyAnswers, columnName)
})

function getAnswerOfQuery(list, query){
  let results = list.map(answer => answer[query])
  console.log('results are:', results)
  //Check if string begins with #
  checkHash(results)
  // Check if string is a HEX
  checkHexCode(results)
  console.log('the NEW results are:', results)
  return results
}

function checkHash(results){
  if(results.length < 1 || undefined){
    console.log('Array must be filled you dummy')
    return
  }
  for(result in results){
    if (results[result].charAt(0) === '#'){
      console.log('yay')
    }
    else{
      console.log('nay')
      results[result] = '#' + results[result]
    }
  }
}

function checkHexCode(results){
  for(result in results){
    if ((typeof results[result] === 'string' && results[result].length === 7) && (!(results[result].toLocaleUpperCase().includes('G' || 'H' || 'I' || 'J' || 'K' || 'L' || 'M' || 'N' || 'O' || 'P' || 'Q' || 'R' || 'S' || 'T' || 'U' || 'V' || 'W' || 'X' || 'Y' || 'X')))){
      console.log('it must be HEX!')
    }
    else{
      console.log('ERRRRRORRRR Not a HEX:', results[result])
      toHexCode(results, result)
    }
  }
}

function toHexCode(results, index){
  // Check for whitespaces
  if (results[index].indexOf(' ') >= 0){
    removeWhitespaces(results, index)
    return
  }
  // Check for rgb color
  else if (results[index].includes('rgb')){
    rgbToHex(results, index)
    console.log('dumb dumb found')
  }
  // Check written color words
  else if (results[index].toLocaleLowerCase() ==='#bruin'||'#lichtblauw'||'#groen'||'#blauw'){
    wordToHex(results, index)
    return
  }
  else{
    console.log('I do not know what you did, but you broke me')
  }
}

function wordToHex(results, index){
  if (results[index].toLocaleLowerCase() === '#bruin'){
    results[index] = '#A52A2A'
  }
  else if (results[index].toLocaleLowerCase() === '#lichtblauw'){
    results[index] = '#ADD8E6'
  }
  else if (results[index].toLocaleLowerCase() === '#groen'){
    results[index] = '#008000'
  }
  else if (results[index].toLocaleLowerCase() === '#blauw'){
    results[index] = '0000FF'
  }
}

function removeWhitespaces(results, index){
    let removedSpace = results[index].replace(/\s+/g, '') //BRON: https://css-tricks.com/snippets/javascript/strip-whitespace-from-string/
    results[index] = removedSpace
    console.log('space found and removed:', results[index])
}

function rgbToHex(results, index){
  // remove the rgb text and other character so only the numbers remain
  removeRBGStyling(results, index)
  splitRGBNumbers(results, index)
  rgbNumbersToHex(results, index)
}

function removeRBGStyling(results, index){
  let rgb = results[index].split("(")[1].split(")")[0] // split
  console.log(rgb)
  results[index] = rgb
}

function splitRGBNumbers(results, index){
  let rgbValues = results[index].replace('.', ',')
  results[index] = rgbValues.split(",")
}

function rgbNumbersToHex(results, index){
    let hexArray = results[index].map(function(rgbValue){       //For each array element
      rgbValue = parseInt(rgbValue).toString(16);             //Convert to a base16 string
      return (rgbValue.length==1) ? "0"+rgbValue : rgbValue;  //Add zero if we get only one character BRON: https://stackoverflow.com/questions/13070054/convert-rgb-strings-to-hex-in-javascript/13070198
  })
  console.log('#'+hexArray.join(''))
  results[index] = '#'+hexArray.join('')
}


//
// const surveyAnswers = data
// console.log('Alle survey antwoorden:', surveyAnswers)
// let columnName = "schoenmaat";
// let answersToQuery = []
//
// let listOfAnswers = []
// answersToQuery = getAnswerOfQuery(surveyAnswers, columnName)
//
// console.log(answersToQuery)
//
// function getAnswerOfQuery(list, query){
//   let results = []
//   for(answer of surveyAnswers){
//     results.push(answer[query])
//   }
//   return results
// }

// for (answer of listOfAnswers){
//   listOfAnswers.push(answer[columnName])
//   console.log('list:', listOfAnswers)
// }

// voor elke answer haal ik answer[columnName] op en stop deze in specificAnswers const
// const specificAnswers = listOfAnswers.map(answer => answer[columnName])
// map = voor elk element dat hier zit, ga ik iets docenten
// map voert function uit op elk element in de array
