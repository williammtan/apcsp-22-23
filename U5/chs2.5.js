// Double List

function start(){
	// Write your code here
	var arr = [1,2,3,4];
    var doubled = doubleList(arr);
    println(doubled);
}

function doubleList(arr) {
    var newArr = [];
    for(var i=0;i<arr.length;i++) {
        newArr.push(arr[i]);
        newArr.push(arr[i]);
    }
    return newArr;
}