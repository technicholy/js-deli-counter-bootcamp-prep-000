var waitingList = []
function takeANumber(waitingArray, newName){
  waitingArray.push(newName)
  return `Welcome, ${newName}. You are number ${waitingArray.length} in line.`
}
