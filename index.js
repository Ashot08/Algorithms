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

function addInListEnd(el){
    bottom.link = el;
    el.link = null;

    return el;
}
function deleteListEnd(){

}
//bottom = addInListEnd({value: 5, link: null});
//bottom = addInListEnd({value: 6, link: null});
//bottom = addInListEnd({value: 7, link: null});

//console.log(list);


/*
* find biggest integer in one side direction list
* */
function findBiggest(list){
    let biggest = list.value;
    while(list.link !== null){
        if(list.link.value > biggest){
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

