function mincost(arr)
{ 
    let cost = 0;

    while (arr.length > 1) {

        // Sort smallest to largest
        arr.sort((a, b) => a - b);

        // Take two smallest ropes
        let first = arr.shift();
        let second = arr.shift();

        // Connect them
        let sum = first + second;

        // Add connection cost
        cost += sum;

        // Put new rope back
        arr.push(sum);
    }

    return cost;
}

module.exports = mincost;