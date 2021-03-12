const challengeFunction = function(rookCell, destinationCell){
    let currentLetter = rookCell.split("")[0];
    let currentNumber = rookCell.split("")[1];
    let destinationLetter = destinationCell.split("")[0];
    let destinationNumber = destinationCell.split("")[1];
    if(currentLetter != destinationLetter && currentNumber != destinationNumber){
       return false
    }
    return true
}

module.exports = challengeFunction
