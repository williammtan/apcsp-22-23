// Evens Only List

function start(){
	// Write your code here
	var arr = [1,2,3,4,5,6];
    var evens = onlyEvens(arr);
    println(evens);
}

function onlyEvens(arr) {
    var newArr = [];
    for(var i=0;i<arr.length;i++) {
        if(arr[i] % 2 == 0) {
            newArr.push(arr[i]);
        }
    }
    
    return newArr;
}