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
  let results = []
  for(answer of surveyAnswers){
    results.push(answer[query])
  }
  console.log('results are:', results)
  checkHash(results)
  //checkHexCode(results)
  return results
}

// function checkHash(results){
//   if(results.length < 1 || undefined){
//     console.log('Array must be filled you dummy')
//     return
//   }
//   for(result in results){
//     if (result.charAt(0) === '#'){
//       console.log('yay')
//     }
//     else{
//       console.log('nay')
//       result = '#' + result
//     }
//   }
//   console.log('the NEW results are:', result)
// }

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
  console.log('the NEW results are:', results)
}

// function checkColorCode(results){
//   for(result in results){
//     if (typeof results[result] === 'string'){
//       console.log('yes string')
//     }
//     if (results[result].length === 7){
//     console.log('yes length 7')
//     }
//     else{
//       console.log('NO! result is', results[result])
//     }
//   }
// }

function checkHexCode(results){
  for(result in results){
    if (typeof results[result] === 'string' && results[result].length === 7){
      console.log('probably hex')
      if (results[result].toLocaleUpperCase().includes('G' || 'H' || 'I' || 'J' || 'K' || 'L' || 'M' || 'N' || 'O' || 'P' || 'Q' || 'R' || 'S' || 'T' || 'U' || 'V' || 'W' || 'X' || 'Y' || 'X')){
        console.log('Not a HEX:', results[result])
        toHexCode(results, result)
      }
      else{
        console.log('it must be HEX!')
      }
    }
    else{
      console.log('Not a HEX:', results[result])
      toHexCode(results, result)
    }
  }
  console.log('renewed list:', results)
}

// function toHexCode(results, index){
//   if (results[index].toLocaleLowerCase() === '#bruin'){
//     results[index] = '#A52A2A'
//   }
//   else if (results[index].toLocaleLowerCase() === '#lichtblauw'){
//     results[index] = '#ADD8E6'
//   }
//   else if (results[index].toLocaleLowerCase() === '#groen'){
//     results[index] = '#008000'
//   }
//   else if (results[index].toLocaleLowerCase() === '#blauw'){
//     results[index] = '0000FF'
//   }
//   else if (results[index].indexOf(' ') >= 0){
//     let removedSpace = results[index].replace(/\s+/g, '') //BRON: https://css-tricks.com/snippets/javascript/strip-whitespace-from-string/
//     results[index] = removedSpace
//     console.log('space found and removed:', results[index])
//   }
// }

function toHexCode(results, index){
  // Check for whitespaces
  if (results[index].indexOf(' ') >= 0){
    removeWhitespaces(results, index)
    return
  }
  // Check for rgb color
  else if (results[index].includes('rgb')){
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
