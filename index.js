//Code your solution here
function findMatching(drivers, searchString) {
    return drivers.filter(driver => driver.toLowerCase() === searchString.toLowerCase());
}


const drivers1 = ['Alice', 'Bob', 'Charlie', 'alice', 'ALICE'];
const searchString1 = 'Alice';

console.log(findMatching(drivers1, searchString1));  
console.log(findMatching(drivers1, 'David'));

//fuzzyMatch()
function fuzzyMatch(drivers, searchString) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(searchString.toLowerCase()));
}

const drivers2 = ['Alice', 'Bob', 'Charlie', 'alice', 'ALICE'];
const searchString2 = 'Al';

console.log(fuzzyMatch(drivers2, searchString2));  
console.log(fuzzyMatch(drivers2, 'li')); 

//matchName
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}

const drivers3 = [
    { name: 'Alice', hometown: 'Kericho' },
    { name: 'Bob', hometown: 'Nairobi' },
    { name: 'Charlie', hometown: 'Nakuru' }
];
const nameToMatch = 'Alice';
console.log(matchName(drivers3, nameToMatch));  
console.log(matchName(drivers3, 'David'));