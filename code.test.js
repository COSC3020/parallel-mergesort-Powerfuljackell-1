const fs = require('fs');

eval(fs.readFileSync('code.js')+'');

const testSort =
    jsc.forall("array nat", async function(arr) {
        var a1 = JSON.parse(JSON.stringify(arr));
        var a2 = JSON.parse(JSON.stringify(arr));
        return JSON.stringify((await parallelMergeSort(a1))) ==
            JSON.stringify(a2.sort(function(a, b)
                { return a - b; }));
    });

jsc.assert(testSort);
