var waitingList = []
function takeANumber(numPeople, newName){
  waitingList.concat(newName)
  return `Welcome, ${newName}. You are number ${numPeople + 1} in line.`
}
