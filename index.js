function findMatching(array, matchName){
    return array.filter(function (name){
        return name.toLowerCase() === matchName.toLowerCase()
    });
}
function fuzzyMatch(array, matchName){
    return array.filter(
        function (name) {
            return name.toLowerCase().indexOf(matchName.toLowerCase()) === 0
        }
    )
}
function matchName(array, matchName){
    return array.filter(function (driver){
        return driver.name === matchName
    })
}
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
// console.log (findMatching(drivers,'Bobby'))