/*
This algorithm gets random indexes for array in range === M
input: N - array length (number), M - count of random indexes (number)
out: array of random indexes
 */

function getRandomIndexesForArray(N, M) {
    let indexes = new Set();
    while (indexes.size < M) {
        indexes.add(Math.floor(Math.random() * N));
    }
    return Array.from(indexes);
}

//console.log( getRandomIndexesForArray(100, 10).sort((a,b)=>a-b) );

/*
roll two dice & rolls statistic
input: rolls count (number)
out: result statistic(object)
*/
function rollTwoDice(times) {
    let result = {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
    };
    for (let i = 0; i < times; i++) {
        let twoRollsResult = [getRandomIndexesForArray(6, 6)[0], (getRandomIndexesForArray(6, 6))[0]];
        for (let i of twoRollsResult) {
            result[i]++;
        }

    }
    return result;
}

//console.log(rollTwoDice(1113110));

/*
* Power
* input: number, exponent
* out: result (number)
* */

function power(number, exponent) {
    let secondDegrees = {
        '1': number,
    };
    let currentDegreeResult = number;
    let currentDegree = 1;
    let result = 1;

    while (currentDegree < exponent) {
        currentDegreeResult *= currentDegreeResult;
        currentDegree *= 2;
        secondDegrees[currentDegree] = currentDegreeResult;
    }

    if (currentDegree === exponent) {
        return secondDegrees[exponent];
    }

    let resultDegrees = Object.keys(secondDegrees);
    for (let i = resultDegrees.length - 1; i >= 0; i--) {
        if (resultDegrees[i] <= exponent) {
            result *= secondDegrees[resultDegrees[i]];
            exponent -= resultDegrees[i];
        }
    }
    return result;
}

//console.log(power(5, 8));


/*
* Add element in the end of the linked list with O(1)
* linked list (one side direction) with top and bottom
* Adding element in the end of the list - O(1)
* */
let bottom = {
    value: 4,
    link: null,
}

list = {
    value: -Infinity,
    link: {
        value: 1,
        link: {
            value: 2,
            link: {
                value: 3,
                link: bottom
            }
        }
    }
}

function addInListEnd(el) {
    bottom.link = el;
    el.link = null;

    return el;
}

function deleteListEnd() {

}

//bottom = addInListEnd({value: 5, link: null});
//bottom = addInListEnd({value: 6, link: null});
//bottom = addInListEnd({value: 7, link: null});

//console.log(list);


/*
* find biggest integer in one side direction list
* */
function findBiggest(list) {
    let biggest = list.value;
    while (list.link !== null) {
        if (list.link.value > biggest) {
            biggest = list.link.value;
        }
        list = list.link;
    }
    return biggest;
}

let list2 = {
    value: -Infinity,
    link: {
        value: 1,
        link: {
            value: 2,
            link: {
                value: 3,
                link: null,
            }
        }
    }
}
//console.log(findBiggest(list2));

/*
* add element in begin of two directions linked list
* */
function insertCell(afterMe, newCell) {
    newCell.next = afterMe.next;
    afterMe.next = newCell;
    newCell.next.prev = newCell;
    newCell.prev = afterMe;
}

function addToTsList(top, newCell) {
    insertCell(top, newCell);
}

// let tsListLimiter = {
//     value: -Infinity,
//     next: tsList1,
//     prev: null
// }
// let tsList1 = {
//     value: 1,
//     next: tsList2,
//     prev: tsList1
// }
// let tsList2 = {
//     value: 2,
//     next: tsList3,
//     prev: tsList1
// }
// let tsList3 = {
//     value: 3,
//     next: null,
//     prev: tsList2
// }

/*
* add element in the end of two directions linked list
* */

function addToEndTsList(bottom, newCell) {
    insertCell(bottom.prev, newCell);
}

/*
* delete cell from two directions list
* */

function deleteCell(afterMe) {
    afterMe.next.next.prev = afterMe;
    afterMe.next = afterMe.next.next;
}

/*
* add cell in sorted two directions list (list sorted from min to max value)
* */

function addCellInSorted(top, cell) {
    let currentCell = top;
    while (currentCell.next.value < cell.value) {
        currentCell = currentCell.next;
    }
    insertCell(currentCell, cell);
}

let tsListLimiter = {
    value: -Infinity,
    prev: null
}

let sortedArr = [1, 2, 3, 4, 5, 6, 7, 8];

function construct2dList(top, arr) {
    let currentCell = top;
    let topCell = currentCell;
    for (let i = 0; i < arr.length; i++) {
        currentCell.next = {
            value: arr[i],
            next: null,
            prev: currentCell
        }
        currentCell = currentCell.next;
    }
    currentCell.next = {
        value: Infinity,
        next: null,
        prev: currentCell,
    }
    return topCell;
}

// construct2dList(tsListLimiter, sortedArr);
// addCellInSorted(tsListLimiter ,{value: 14});
// console.log(tsListLimiter);


/*
* check is linked list sorted from min to max
* */
let newList = construct2dList(tsListLimiter, sortedArr);

function checkSorted(top) {
    while (top.next && top.value <= top.next.value) {
        top = top.next;
    }
    return top.next === null;
}

//console.log(checkSorted(newList));


/*
*
* multithreaded linked list
* sort planets
*
* */

class Planet{
    constructor(name, distanceToSun, mass, diameter, nextDistance, nextMass, nextDiameter) {
        this.name = name;
        this.distanceToSun = distanceToSun;
        this.mass = mass;
        this.diameter = diameter;
        this.nextDistance = nextDistance;
        this.nextMass = nextMass;
        this.nextDiameter = nextDiameter;
    }
}

const Mars = new Planet('Mars', 228, 6.42*Math.pow(10, 23), 6779);
const Earth = new Planet('Earth', 150, 5.9*Math.pow(10, 24), 12756);
const Saturn = new Planet('Saturn', 1427, 5.6*Math.pow(10, 26),120660);
const Oro = new Planet('Oro', 27, 5.6*Math.pow(10, 27),12960);
const planets = [Mars, Earth, Saturn];

function sortPlanets(planets){
    if(planets.length < 2){
        return 'nothing to sort';
    }
    let distances = [];
    let masses = [];
    let diameters = [];
    for(let i = 0; i < planets.length; i++){
        distances.push({
            planet: planets[i],
            value: planets[i].distanceToSun,
        });
        masses.push({
            planet: planets[i],
            value: planets[i].mass,
        });
        diameters.push({
            planet: planets[i],
            value: planets[i].diameter,
        });
    }

    distances.sort((a,b)=>a.value - b.value);
    masses.sort((a,b)=>a.value - b.value);
    diameters.sort((a,b)=>a.value - b.value);

    for(let i = 0; i < planets.length; i++){
        distances[i].planet.nextDistance = distances[i+1] ?? null;
        masses[i].planet.nextMass        = masses[i+1] ?? null;
        diameters[i].planet.nextDiameter = diameters[i+1] ?? null;
    }
    return{
        distances,
        masses,
        diameters
    }
}
function addPlanetToList(planet){
    planets.push(planet);
    return sortPlanets(planets);
}
sortPlanets(planets);
const sortedPlanets = addPlanetToList(Oro);

let sortByBlock = document.querySelector('#sort-by ul');
let resultBlock = document.querySelector('#result ul');

sortByBlock.addEventListener('click', function(e){
    if(e.target.tagName === 'BUTTON'){
        const toShow = e.target.closest('li').dataset.index;
        resultBlock.innerHTML = '';
        for(let planet of sortedPlanets[toShow]){
            resultBlock.innerHTML += `<li>${planet.planet.name} - ${planet.value}</li>`;
        }
    }
})
for(let item of Object.keys(sortedPlanets)){
    sortByBlock.innerHTML += `<li data-index="${item}" ><button>${item}</button></li>`
}



/*
* turtle and hare
* algorithm to find a loop in linked list
* */
const linkedListLoopEnd = {
    value: 7,
    next: null
}
const linkedListLoopStart = {
    value: 4,
    next: {
        value: 5,
        next: {
            value: 6,
            next: linkedListLoopEnd
        }
    }
}
linkedListLoopEnd.link = linkedListLoopStart;
const linkedList={
    value: -Infinity,
    next: {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: linkedListLoopStart
            }
        }
    }
}

function rabbitAndTurtle(top){
    while(true){
        let rabbit = top.value;
        let turtle = top.value;
        if(rabbit === null){
            return 'loop not found';
        }
        //rabbit = top.next.next;

    }
}
console.log(linkedList)