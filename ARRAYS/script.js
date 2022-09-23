function alwaysHungry(arr) {
    var istherefood = false
    for(var i=0; i<arr.length; i++) {
        if (arr[i]=="food") {
            console.log("yummy");
            istherefood = true
        }
    }
    if (istherefood == false) {
        console.log("I'm hungry");
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4, 1, 5, 7, 2]);


function highPass(arr, cutoff) {
    var filteredArr = [];

    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);


function reverse(arr) {
    const array1 = ["a", "b", "c", "d", "e"];
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);