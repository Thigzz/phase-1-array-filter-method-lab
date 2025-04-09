// Code your solution here
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];


function findMatching(array, majina) {
    const namesWithAnS = array.filter(name => name.toLowerCase() === majina.toLowerCase())
    return namesWithAnS
}

console.log(findMatching(drivers, "bobby"))


function fuzzyMatch(array, string) {
    return array.filter(name => name.toLowerCase().startsWith(string.toLowerCase()))
}

function matchName(array, name) {
    const nameMatches = array.filter(user => user.name.toLowerCase() === name.toLowerCase())
    return nameMatches
}