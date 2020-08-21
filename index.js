function takeANumber(waitingArray, newName){
  waitingArray.push(newName)
  return `Welcome, ${newName}. You are number ${waitingArray.length} in line.`
}
function nowServing(waitingArray){
  if (waitingArray.length === 0){
    return "There is nobody waiting to be served!"
  }else{
    var nextUp = waitingArray[0]
    waitingArray.shift()
    return `Currently serving ${nextUp}`
  }
}
function currentLine(waitingArray){
  if (waitingArray.length === 0){
    return "The line is currently empty."
  }else{
    var retStr = "The line is currently:"
    for (let i = 0; i < waitingArray.length; i++){
      retStr.concat(`${i}. ${waitingArray[i]}`)
    }
    return retStr
  }
}
