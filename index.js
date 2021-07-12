/*
This algorithm gets random indexes for array in range === M
input: N - array length (number), M - count of random indexes (number)
out: array of random indexes
 */

function getRandomIndexesForArray(N, M) {
    let indexes = new Set();
    while(indexes.size < M){
        indexes.add(Math.floor(Math.random()*N));
    }
    return Array.from(indexes);
}

//console.log( getRandomIndexesForArray(100, 10).sort((a,b)=>a-b) );

/*
roll two dice & rolls statistic
input: rolls count (number)
out: result statistic(object)
*/
function rollTwoDice(times){
    let result = {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
    };
    for (let i = 0; i < times; i++){
        let twoRollsResult  = [ getRandomIndexesForArray(6,6)[0],(getRandomIndexesForArray(6,6))[0] ];
        for(let i of twoRollsResult){
            result[i]++;
        }

    }
    return result;
}
console.log(rollTwoDice(1113110));

